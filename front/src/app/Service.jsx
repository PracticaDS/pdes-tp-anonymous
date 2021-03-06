import axios from 'axios';
import reducer from '../reducers/toolboxReducer';
import actions from '../actions/toolboxActions';

// window.ENV_API contains content of public/config.js file
const ENV_API = window.ENV_API || {};
const api = {
  protocol: ENV_API.PROTOCOL || 'http',
  host: ENV_API.HOST || 'localhost',
  port: ENV_API.PORT || 8080,
};
api.url = `${api.protocol}://${api.host}:${api.port}`;

const service = {
  getUserAndCreate: user => axios
    .get(`${api.url}/${user}`)
    .then(res => res.data)
    .catch(error => console.info(error)),

  deleteGame: (user, id) => axios
    .delete(`${api.url}/${user}/games/${id}`)
    .then(res => res.data)
    .catch(error => console.info(error)),

  createGame: (user, gameName) => {
    const state = reducer(undefined, actions.init(4, 4));
    const date = new Date();
    const dateString = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;
    const newGame = {
      name: gameName,
      date: dateString,
      state,
    };

    return axios
      .post(`${api.url}/${user}/games`, newGame)
      .then(savedUser => savedUser)
      .catch(error => console.info(error));
  },

  getGame: (user, gameId) => axios.get(`${api.url}/${user}/games/${gameId}`)
    .then(res => res.data)
    .catch(error => console.info(error)),

  updateGame: (user, gameId, state) => axios.put(`${api.url}/${user}/games/${gameId}`, state)
    .then(res => res.data)
    .catch(error => console.info(error)),
};

export default service;
