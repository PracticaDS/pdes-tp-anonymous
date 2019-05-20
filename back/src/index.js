const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.json({ message: 'Ok' })
    .status(200);
});

app.listen(port, () => {
  console.log(`Se inicio la aplicacion en: http://localhost:${port}`);
});
