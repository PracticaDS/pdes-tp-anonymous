const express = require('express');
// const User = require('../models/user');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Ok, auto deploy working' });
});

app.listen(port, () => {
  console.info(`Se inicio la aplicación en: http://localhost:${port}`);
});

module.exports = app;
