import executeTick from './tick';
import executeAction from './executeAction';
import createEmptyMachines from './createEmptyMachines';

import { EXECUTE_ACTION, INIT, SET_ACTION_TYPE, TICK } from '../actions/toolboxActions';

const initialState = { currentAction: { action: null }, machines: [], floor: [] };

export default (state = { ...initialState }, { type, payload }) => {
  const { currentAction, machines, floor } = state;
  let newState;
  switch (type) {
    case EXECUTE_ACTION:
      newState = { ...state, machines: executeAction(payload, machines, currentAction) };
      break;
    case INIT:
      newState = {
        ...state,
        machines: createEmptyMachines(payload),
        width: payload.width,
        height: payload.height,
      };
      break;
    case SET_ACTION_TYPE:
      newState = { ...state, currentAction: payload };
      break;
    case TICK:
      newState = { ...state, ...executeTick(machines, floor) };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
};
