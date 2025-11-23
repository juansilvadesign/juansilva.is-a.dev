import SystemMonitor from './SystemMonitor.js';

const monitor = new SystemMonitor();
let emailErrorCount = 0;
const errorThreshold = 5; // Número de erros antes de alertar
let lastErrorTime = Date.now();

export const monitoringMiddleware = (req, res, next) => {
  const start = Date.now();

  // Adiciona um listener para quando a resposta terminar
  res.on('finish', () => {
    const duration = Date.now() - start;
    const stats = monitor.getSystemStats();

    // Log da requisição
    console.log({
      timestamp: new Date().toISOString(),
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      ...stats
    });

    // Monitorar erros de email
    if (req.path === '/api/send' && res.statusCode >= 400) {
      emailErrorCount++;

      // Se tivermos muitos erros em um curto período
      if (emailErrorCount >= errorThreshold &&
        (Date.now() - lastErrorTime) < 300000) { // 5 minutos
        console.error('ALERTA: Alto número de falhas no envio de emails!');
        // Aqui você pode adicionar notificação externa (Slack, Email, etc)
        emailErrorCount = 0;
      }

      lastErrorTime = Date.now();
    }
  });

  next();
};
