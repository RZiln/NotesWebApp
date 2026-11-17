const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.send('Health check successful!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);