import axios from 'axios';

const server = 'http://localhost:8080';

const getUserAndCreate = user => axios.get(`${server}/${user}`)
  .then(res => res.data)
  .catch(error => console.info(error));

const deleteGame = (user, id) => axios.delete(`${server}/${user}/games/${id}`)
  .then(res => res.data)
  .catch(error => console.info(error));

export default { getUserAndCreate, deleteGame };
