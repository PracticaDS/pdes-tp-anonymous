const UserController = require('../model/user.controller');

module.exports = (app) => {
  app.get('/', (_, res) => {
    res.status(200).json({ message: 'Ok, auto deploy working' });
  });

  app.route('/users')
    .get(UserController.list);

  app.route('/users')
    .post(UserController.create);

  // app.route('/:username')
  //   .get(UserController.getUser);

  // app.route('/:username/fabricas')
  //   .get(UserController.getFactories);
};
