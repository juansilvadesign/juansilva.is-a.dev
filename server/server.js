const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Template server is running!' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});