require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const domain = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080
};
const mongo = {
  host: process.env.MONGO_HOST || 'localhost',
  port: process.env.MONGO_PORT || 27017,
  user: process.env.MONGO_USER || '',
  pass: process.env.MONGO_PASS || ''
};

// Mongoose connection
const db = mongoose.connection;
mongoose.connect(`mongodb://${mongo.host}:${mongo.port}/pdes?authSource=admin`, {
  useNewUrlParser: true,
  user: mongo.user,
  pass: mongo.pass,
  keepAlive: true
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.info('MongoDB Connection OK'));


// Parse json body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routes')(app);

app.listen(domain.port, () => {
  console.info(`Se inicio la aplicación en: http://${domain.host}:${domain.port}`);
});

module.exports = { app, mongoose };
