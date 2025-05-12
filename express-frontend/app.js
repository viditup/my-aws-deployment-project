const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World! Frontend');
});

const port = 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Express app is running on port ${port}`);
});
