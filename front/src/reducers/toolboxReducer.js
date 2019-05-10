import executeTick from './tick';
import { ADD_MACHINE, REMOVE_MACHINE, ROTATE_MACHINE, SET_ACTION_TYPE, TICK } from '../actions/toolboxActions';

const newDirection = (machine, rotateId) => machine.direction + (machine.id === rotateId ? 90 : 0);

export default (state = { currentAction: null, machines: [], floor: [] }, action) => {
  let newState;
  switch (action.type) {
    case ADD_MACHINE:
      newState = { ...state, machines: [...state.machines, action.payload] };
      break;
    case REMOVE_MACHINE:
      newState = { ...state, machines: state.machines.filter(m => m.id !== action.payload) };
      break;
    case ROTATE_MACHINE:
      newState = {
        ...state,
        machines: state.machines.map(machine => (
          { ...machine, direction: newDirection(machine, action.payload) }
        )),
      };
      break;
    case SET_ACTION_TYPE:
      newState = { ...state, currentAction: action.payload };
      break;
    case TICK:
      newState = { ...state, ...executeTick(state.machines, state.floor) };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
};
