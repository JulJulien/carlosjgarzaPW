const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const path = require('path');

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../carlosjgarza/build')));

// Anything that doesn't match the above routes should go to React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../carlosjgarza/build/index.html'));
});
