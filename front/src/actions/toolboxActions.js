export const ADD_MACHINE = 'ADD_MACHINE';
export const REMOVE_MACHINE = 'REMOVE_MACHINE';
export const ROTATE_MACHINE = 'ROTATE_MACHINE';
export const SET_ACTION_TYPE = 'SET_ACTION_TYPE';

export default {
  addMachine(machine) {
    return { type: ADD_MACHINE, payload: machine };
  },
  removeMachine(machineId) {
    return { type: REMOVE_MACHINE, payload: machineId };
  },
  rotateMachine(machineId) {
    return { type: ROTATE_MACHINE, payload: machineId };
  },
  setCurrentAction(actionType) {
    return { type: SET_ACTION_TYPE, payload: actionType };
  },
};
