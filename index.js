// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js Backend!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'API working fine', status: 'success' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Exported for testing
