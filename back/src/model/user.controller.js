const { OK, CREATED } = require('http-status-codes');
const User = require('./user');

const UserController = {
  /* Create new user */
  create: (req, res, next) => {
    const user = new User({
      username: req.body.username,
      games: []
    });
    user.save()
      .then(savedUser => res.status(CREATED).json(savedUser))
      .catch(error => next(error));
  },

  /* Get users list */
  list: (_, res, next) => {
    User
      .find()
      .then(users => res.status(OK).json(users))
      .catch(error => next(error));
  },

  /* Get user  */
  getUser: (req, res, next) => {
    User
      .findOne({ username: req.params.username })
      .then(user => res.status(OK).json(user))
      .catch(error => next(error));
  }
};

module.exports = UserController;
