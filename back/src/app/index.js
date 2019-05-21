const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.json({ message: 'Ok, auto deploy working' })
    .status(200);
});

app.listen(port, () => {
  console.info(`Se inicio la aplicación en: http://localhost:${port}`);
});
