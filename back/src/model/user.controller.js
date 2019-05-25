const User = require('./user');

/* Create new user */
function create(req, res, next) {
  const user = new User({
    username: req.params.username
  });

  user.save()
    .then(savedUser => res.json(savedUser))
    .catch(error => next(error));
}

/* Get users list */
function list(req, res, next) {
  User
    .find()
    .then(users => res.json(users))
    .catch(error => next(error));
}

/* Get user  */
function getUser(req, res, next) {
  User
    .findOne({ username: req.params.username })
    .then(user => res.status(200).json(user))
    .catch(error => next(error));
}

module.exports = {
  create, list, getUser
};
