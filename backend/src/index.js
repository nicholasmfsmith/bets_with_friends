const express = require('express');
const app = express();
const { host: { port } } = require('./config');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})