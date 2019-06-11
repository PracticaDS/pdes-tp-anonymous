import axios from 'axios';
import reducer from '../reducers/toolboxReducer';
import actions from '../actions/toolboxActions';

const getUserAndCreate = user => axios.get(`/${user}`)
  .then(res => res.data)
  .catch(console.error);

const deleteGame = (user, id) => axios.delete(`/${user}/games/${id}`)
  .then(res => res.data)
  .catch(console.error);

const createGame = (user, gameName) => {
  const state = reducer(undefined, actions.init(4, 4));
  const date = new Date();
  const dateString = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;

  const newGame = {
    name: gameName,
    date: dateString,
    state,
  };
  return axios.post(`/${user}/games`, newGame)
    .then(savedUser => savedUser)
    .catch(console.error);
};

const getGame = (user, gameId) => axios.get(`/${user}/games/${gameId}`)
  .then(res => res.data)
  .catch(console.error);

const updateGame = (user, gameId, game) => axios.put(`/${user}/games/${gameId}`, game)
  .then(res => res.data)
  .catch(console.error);

export default { getUserAndCreate, deleteGame, createGame, updateGame, getGame };
