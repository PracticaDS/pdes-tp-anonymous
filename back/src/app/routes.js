const { OK } = require('http-status-codes');
const UserController = require('../model/user.controller');

module.exports = (app) => {
  app.get('/', (_, res) => res.status(OK).json({ message: 'OK, working...' }));

  app.route('/users')
    .get(UserController.list)
    .post(UserController.create);
  app.route('/users/:username')
    .get(UserController.getUser);

  app.route('/users/:username/games')
    .post(UserController.createGame);
  app.route('/users/:username/games/:gameId')
    .get(UserController.getGame)
    .put(UserController.updateGame)
    .delete(UserController.deleteGame);
};
