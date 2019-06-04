const UserController = require('../model/user.controller');

module.exports = (app) => {
  app.route('/users')
    .get(UserController.list)
    .post(UserController.create);

  app.route('/:username')
    .get(UserController.getUser);

  // app.route('/:username/fabricas')
  //   .get(UserController.getFactories);
};
