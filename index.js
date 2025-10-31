const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js Backend!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is sample data' });
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
