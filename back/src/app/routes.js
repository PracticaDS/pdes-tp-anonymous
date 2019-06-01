const { OK } = require('http-status-codes');
const UserController = require('../model/user.controller');

module.exports = (app) => {
  app.get('/', (_, res) => res.status(OK).json({ message: 'OK, working...' }));

  app.route('/users')
    .get(UserController.list)
    .post(UserController.create);
  app.route('/users/:username')
    .get(UserController.getUser);
    
  app.route('/users/:username/fabricas')
  .get(userController.getFactories)
  .post(userController.createFactory);

  app.route('/:username/fabricas/:fabricaId')
  .get(userController.getFactory);
};
