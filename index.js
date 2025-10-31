const express = require('express');
const app = express();

// GET / - Returns greeting message
app.get('/', (req, res) => {
  res.send('Hello from Node.js Backend!');
});

// GET /api/data - Returns specific JSON response
app.get('/api/data', (req, res) => {
  res.json({ 
    "message": "API working fine", 
    "status": "success" 
  });
});

// 404 handler for all other routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Only start the server when running directly (not during testing)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the app for testing
module.exports = app;
