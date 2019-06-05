const { OK, CREATED, NOT_FOUND } = require('http-status-codes');
const User = require('./user');

const UserController = {
  create: (req, res, next) => {
    const user = new User({
      username: req.body.username,
      games: []
    });
    user.save()
      .then(savedUser => res.status(CREATED).json(savedUser))
      .catch(error => next(error));
  },

  list: (_, res, next) => {
    User
      .find()
      .then(users => res.status(OK).json(users))
      .catch(error => next(error));
  },

  getUser: (req, res, next) => {
    User
      .findOne({ username: req.params.username })
      .then((user) => {
        if (!user) return res.status(NOT_FOUND).json();
        return res.status(OK).json(user);
      })
      .catch(error => next(error));
  }
};

module.exports = UserController;
