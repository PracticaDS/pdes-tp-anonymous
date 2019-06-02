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
  
  getFactories: (req, res, next) => {
    User
      .findOne({ username: req.params.username })
      .then(user => res.json(user.factories))
      .catch(error => next(error));
  }

/* Create new factory */
createFactory: (req, res, next) => {
  const newFactory = req.body;
  return User
    .findOneAndUpdate(
      { username: req.params.username },
      { $push: { factories: newFactory } },
      { new: true, useFindAndModify: false }
    );
}

/* Get a user factory */
getFactory: (req, res, next) => {
  User
    .findOne({ username: req.params.username })
    .then((user) => {
      const factory = user.factories.find(e => e.name === req.params.fabricaId);
      res.status(200).json(factory);
    })
    .catch(error => next(error));
}

/* Delete a user factory */
deleteFactory: (req, res, next) => {
  User
    .findOne({ username: req.params.username })
    .then(user => user.factories.find(e => e.name === req.params.fabricaId))
    .then(factory => User
      .findOneAndUpdate(
        { username: req.params.username },
        { $pull: { factories: factory } },
        { new: true, useFindAndModify: false }
      ));
}

/* Update a user's factory */
function updateFactoryAux(req) {
  return deleteFactoryAux(req)
    .then(() => createFactoryAux(req));
}

function resolve(func, req, res, next) {
  return func(req)
    .then(user => res.status(200).json(user))
    .catch(error => next(error));
}

module.exports = UserController;
