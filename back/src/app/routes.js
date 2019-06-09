const UserController = require('../model/user.controller');

/**
 * Rutas
 *
 *  - GET /
 *    Retorna el listado de todos los usuarios y sus juegos
 *  - GET /:username
 *    Devuelve el usuario y la lista de sus juegos. Si no existe lo crea
 *  - POST /:username/games
 *    Crea y persiste un nuevo juego
 *  - GET /:username/games/:gameId
 *    Retorna el juego correspondiente a :gameId
 *  - PUT /:username/games/:gameId
 *    Actualiza el estado del juego correspondiente al :gameId
 *  - DELETE /:username/games/:gameId
 *    Elimina el juego correspondiente al :gameId
 */
module.exports = (app) => {
  app.route('/')
    .get(UserController.list);

  app.route('/:username')
    .get(UserController.getUser);

  app.route('/:username/games')
    .post(UserController.createGame);

  app.route('/:username/games/:gameId')
    .get(UserController.getGame)
    .put(UserController.updateGame)
    .delete(UserController.deleteGame);
};
