const { OK } = require('http-status-codes');
const UserController = require('../model/user.controller');

module.exports = (app) => {
  app.get('/', (_, res) => res.status(OK).json({ message: 'OK, working...' }));

  app.route('/users')
    .get(UserController.list);

  app.route('/users')
    .post(UserController.create);

  // app.route('/:username')
  //   .get(UserController.getUser);

  // app.route('/:username/fabricas')
  //   .get(UserController.getFactories);
};
