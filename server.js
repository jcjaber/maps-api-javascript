const express = require('express');
const app = express();
const port = 5000;
const path = require('path')
require('dotenv').config()

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root:__dirname});
});

app.get('/key', (req, res) => {
  res.send(process.env.API_KEY);
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
});