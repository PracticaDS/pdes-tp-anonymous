const { OK, CREATED, NO_CONTENT, NOT_FOUND } = require('http-status-codes');
const mongoose = require('mongoose');
const User = require('./user');

const gameBuilder = (body, id = null) => ({
  _id: id || mongoose.Types.ObjectId(),
  name: body.name || 'No Game',
  date: body.date || new Date(),
  state: {
    currentAction: body.state.currentAction || null,
    machines: body.state.machines || [],
    floor: body.state.floor || [],
    width: body.state.width || 1,
    height: body.state.height || 1
  }
});

const UserController = {
  list: (_, res, next) => {
    User
      .find()
      .then(users => res.status(OK).json(users))
      .catch(error => next(error));
  },

  getUser: (req, res, next) => {
    const { username } = req.params;
    User
      .findOne({ username })
      .then((user) => {
        if (!user) {
          return new User({ username })
            .save()
            .then(newUser => res.status(OK).json(newUser));
        }
        return res.status(OK).json(user);
      })
      .catch(error => next(error));
  },

  /**
   * Games
   */

  getGame: (req, res, next) => {
    User
      .findOne({ username: req.params.username })
      .then((user) => {
        const game = user.games.find(g => g._id.toString() === req.params.gameId);
        if (!game) return res.status(NOT_FOUND).json();
        return res.status(OK).json(game);
      })
      .catch(next);
  },

  createGame: (req, res, next) => {
    const newGame = gameBuilder(req.body);
    User
      .findOneAndUpdate(
        { username: req.params.username },
        { $push: { games: newGame } },
        { new: true, useFindAndModify: false }
      )
      .then((user) => {
        if (!user) return res.status(NOT_FOUND).json();
        return res.status(CREATED).json(user);
      })
      .catch(next);
  },

  updateGame: (req, res, next) => {
    User
      .findOne({ username: req.params.username })
      .then((user) => {
        const oldGame = user.games.find(g => g._id.toString() === req.params.gameId);
        if (!oldGame) return res.status(NOT_FOUND).json();

        const newGame = gameBuilder(req.body, oldGame._id);
        User.findOneAndUpdate(
          { username: req.params.username },
          { $pull: { games: oldGame } },
          { new: true, useFindAndModify: false }
        ).then(() => {
          User.findOneAndUpdate(
            { username: req.params.username },
            { $push: { games: newGame } },
            { new: true, useFindAndModify: false }
          ).catch(next);
        }).catch(next);

        return res.status(OK).json(newGame);
      })
      .catch(next);
  },

  deleteGame: (req, res, next) => {
    User
      .findOne({ username: req.params.username })
      .then((user) => {
        const game = user.games.find(g => g._id.toString() === req.params.gameId);
        if (!game) return res.status(NOT_FOUND).json();

        return User.findOneAndUpdate(
          { username: req.params.username },
          { $pull: { games: game } },
          { new: true, useFindAndModify: false }
        ).then(() => res.status(NO_CONTENT).json());
      })
      .catch(next);
  }
};

module.exports = UserController;
