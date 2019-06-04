const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const domain = 'localhost';
const port = 8080;
const portDB = 27017;
const routes = express();

// Mongoose connection
const db = mongoose.connection;
mongoose.connect(`mongodb://${domain}:${portDB}/pdes?authSource=admin`, {
  useNewUrlParser: true,
  user: 'root',
  pass: 'example',
  keepAlive: true
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.info('MongoDB Connection OK'));


// Parse json body
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok, auto deploy working' });
});

require('./app/routes')(routes);

routes.listen(port, () => {
  console.info(`Se inicio la aplicación en: http://${domain}:${port}`);
});

module.exports = {
  routes, mongoose
};
