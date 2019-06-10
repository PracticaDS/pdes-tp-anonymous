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
  const newGame = {
    name: gameName,
    date: Date.now().toString(),
    state,
  };
  return axios.post(`${server}/${user}/games`, newGame)
    .then(savedUser => savedUser)
    .catch(error => console.info(error));
};

export default { getUserAndCreate, deleteGame, createGame };
