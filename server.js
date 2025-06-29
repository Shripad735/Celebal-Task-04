// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: Logs request method and URL
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware/route handler
});

// Middleware: Parse JSON bodies (for POST requests)
app.use(express.json());

// Route 1: Home Page
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page!</h1>');
});

// Route 2: About Page
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>We are learning Express.js.</p>');
});

// Optional: POST route example
app.post('/data', (req, res) => {
  console.log('Received data:', req.body);
  res.status(201).json({
    message: 'Data received!',
    data: req.body
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});