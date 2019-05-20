const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Probando express');
});

app.listen(port, () => {
  console.log(`Se inicio la aplicacion en: http://localhost:${port}`);
});
