export const EXECUTE_ACTION = 'EXECUTE_ACTION';
export const EXECUTE_PARTIAL_ACTION = 'EXECUTE_PARTIAL_ACTION';
export const INIT = 'INIT';
export const SET_ACTION_TYPE = 'SET_ACTION_TYPE';
export const TICK = 'TICK';


export default {
  executeAction(position) {
    return { type: EXECUTE_ACTION, payload: position };
  },
  executePartialAction(position) {
    return { type: EXECUTE_PARTIAL_ACTION, payload: position };
  },
  init(width, height) {
    return { type: INIT, payload: { width, height } };
  },
  setCurrentAction(actionType) {
    return { type: SET_ACTION_TYPE, payload: actionType };
  },
  executeTick() {
    return { type: TICK };
  },
};
