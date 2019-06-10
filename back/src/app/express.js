const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const domain = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080
};

// Parse json body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Use cors
app.use(cors());

require('./routes')(app);

app.listen(domain.port, () => {
  console.info(`Se inicio la aplicación en: http://${domain.host}:${domain.port}`);
});

module.exports = app;
