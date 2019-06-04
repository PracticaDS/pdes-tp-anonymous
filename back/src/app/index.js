const express = require('express');
const mongoose = require('mongoose');
// const User = require('../models/user');

const domain = 'localhost';
const port = 8080;
const portDB = 27017;
const app = express();

// Mongoose connection
const db = mongoose.connection;
mongoose.connect(`mongodb://${domain}:${portDB}/prueba`, { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.info('MongoDB Connection OK'));


app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Ok, auto deploy working' });
});

app.listen(port, () => {
  console.info(`Se inicio la aplicación en: http://${domain}:${port}`);
});

module.exports = app;
