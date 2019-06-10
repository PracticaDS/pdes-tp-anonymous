import axios from 'axios';
import reducer from '../reducers/toolboxReducer';
import actions from '../actions/toolboxActions';

const server = 'http://localhost:8080';

const getUserAndCreate = user => axios.get(`${server}/${user}`)
  .then(res => res.data)
  .catch(error => console.info(error));

const deleteGame = (user, id) => axios.delete(`${server}/${user}/games/${id}`)
  .then(res => res.data)
  .catch(error => console.info(error));

const createGame = (user, gameName) => {
  const state = reducer(undefined, actions.init(4, 4));
  const date = new Date();
  const dateString = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;

  const newGame = {
    name: gameName,
    date: dateString,
    state,
  };
  return axios.post(`${server}/${user}/games`, newGame)
    .then(savedUser => savedUser)
    .catch(error => console.info(error));
};

const getGame = (user, gameId) => axios.get(`${server}/${user}/games/${gameId}`)
  .then(res => res.data)
  .catch(error => console.info(error));

const updateGame = (user, gameId, state) => axios.put(`${server}/${user}/games/${gameId}`, state)
  .then(res => res.data)
  .catch(error => console.info(error));

export default { getUserAndCreate, deleteGame, createGame, updateGame, getGame };
