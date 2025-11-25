import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { monitoringMiddleware } from './utils/monitoring.js';

// Carrega variáveis de ambiente baseado no ambiente
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});

const app = express();

// Configurar trust proxy para o Render
app.set('trust proxy', 1);

// Segurança
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// Compressão
app.use(compression());

// Logs estruturados
morgan.token('body', (req) => JSON.stringify(req.body));
const logFormat = process.env.NODE_ENV === 'production'
  ? ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
  : 'dev';
app.use(morgan(logFormat, {
  skip: (req) => process.env.NODE_ENV === 'production' && req.method === 'OPTIONS',
}));

app.use(express.json({ limit: '10kb' }));

// Adiciona middleware de monitoramento
app.use(monitoringMiddleware); // Limita o tamanho do payload

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Limite de 5 requisições por IP
  message: 'Muitas requisições deste IP, por favor tente novamente em 15 minutos',
  // Configuração para trabalhar corretamente com o proxy do Render
  trustProxy: true,
  standardHeaders: true,
  legacyHeaders: false
});

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? ['https://juansilva.is-a.dev', 'https://www.juansilva.is-a.dev', 'https://dev.juanpablosilva.com.br']
    : 'http://localhost:3000',
  methods: ['POST'],
  optionsSuccessStatus: 204,
  credentials: true,
  maxAge: 86400,
};

app.use(cors(corsOptions));
app.use('/api/send', limiter); // Aplica rate limiting na rota de envio

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  debug: true,
});

transporter.verify(function (error, success) {
  if (error) {
    console.log('Erro na verificação do servidor de email:', error);
  } else {
    console.log('Servidor pronto para enviar emails');
  }
});

// Middleware de erro
const errorHandler = (err, req, res, next) => {
  console.error('Error:', {
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    timestamp: new Date().toISOString(),
    path: req.path,
    method: req.method,
    ip: req.ip,
  });

  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production'
      ? 'Erro interno do servidor'
      : err.message
  });
};

// Middleware para validar o corpo da requisição
const validateEmailRequest = (req, res, next) => {
  const { fname, lname, email, message } = req.body; // Updated to match frontend fields

  if (!fname || !lname || !email || !message) {
    return res.status(400).json({
      error: 'Campos obrigatórios faltando'
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      error: 'Email inválido'
    });
  }

  next();
};

app.post('/api/send', validateEmailRequest, async (req, res) => {
  try {
    const { fname, lname, email, message } = req.body;

    // Validar se temos as credenciais necessárias
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      throw new Error('Credenciais de email não configuradas');
    }

    console.log('Iniciando tentativa de envio de email...');
    console.log('De:', process.env.GMAIL_USER);
    console.log('Dados do formulário:', { fname, lname, email });

    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER, // Usar apenas o email autorizado como remetente
      replyTo: email, // Email do formulário para resposta
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${fname} ${lname}`,
      text: `
        Name: ${fname} ${lname}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${fname} ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('Email enviado com sucesso:', info);

    res.json({
      success: true,
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Erro detalhado:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });

    res.status(500).json({
      error: 'Erro no envio',
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 3001;
// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware deve ser o último
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated');
  });
});
