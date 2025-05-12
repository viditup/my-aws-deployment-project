const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 3000;  // Ensure port is set to 3000

// Bind to 0.0.0.0 so it's accessible externally
app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error('Error starting the server:', err);
    return;
  }
  console.log(`Express app is running on port ${port}`);
});
