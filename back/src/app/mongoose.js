const mongoose = require('mongoose');

const mongo = {
  db: process.env.MONGO_DB || 'pdes',
  host: process.env.MONGO_HOST || 'localhost',
  port: process.env.MONGO_PORT || 27017,
  user: process.env.MONGO_USER || '',
  pass: process.env.MONGO_PASS || ''
};

// Mongoose connection
const db = mongoose.connection;

function connect() {
  mongoose.connect(`mongodb://${mongo.host}:${mongo.port}/${mongo.db}`, {
    useNewUrlParser: true,
    user: mongo.user,
    pass: mongo.pass,
    keepAlive: true
  }).catch(() => setTimeout(connect, 1000));
}

connect();
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.info('MongoDB Connection OK'));

module.exports = mongoose;
