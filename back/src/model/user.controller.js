const User = require('./user');

const UserController = {
  /* Create new user */
  create: (req, res, next) => {
    const user = new User({
      username: req.body.username,
      games: []
    });
    // return user.save((error, savedUser) => {
    //   if (error) {
    //     console.error(error);
    //     next(error);
    //   }
    //   res.json(savedUser);
    // });
    return user.save()
      .then((savedUser) => {
        console.log(savedUser);
        res.json(savedUser);
      })
      .catch(error => next(error));
  },

  /* Get users list */
  list: (req, res, next) => {
    User
      .find()
      .then(users => res.json(users))
      .catch(error => next(error));
  },

  /* Get user  */
  getUser: (req, res, next) => {
    User
      .findOne({ username: req.params.username })
      .then(user => res.status(200).json(user))
      .catch(error => next(error));
  }
};

module.exports = UserController;
