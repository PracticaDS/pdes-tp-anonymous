export default (state = {
  currentAction: null,
  machines: [],
}, action) => {
  let newState;
  switch (action.type) {
    case 'SET_ACTION_TYPE':
      newState = { ...state, currentAction: action.payload };
      break;
    case 'ADD_MACHINE':
      newState = { ...state, machines: [...state.machines, action.payload] };
      break;
    case 'REMOVE_MACHINE':
      newState = { ...state, machines: state.machines.filter(m => m.id !== action.payload) };
      break;
    case 'ROTATE_MACHINE':
      newState = {
        ...state,
        machines: state.machines.map((machine) => {
          if (machine.id === action.payload) {
            return { ...machine, direction: machine.direction + 90 };
          }
          return machine;
        }),
      };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
};
