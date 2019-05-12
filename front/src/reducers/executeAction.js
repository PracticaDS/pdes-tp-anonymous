function isSamePosition(machine, position) {
  return machine.position.x === position.x && machine.position.y === position.y;
}

function newDirection(machine, position) {
  if (isSamePosition(machine, position)) {
    return { ...machine, direction: (machine.direction + 90) % 360 };
  }
  return machine;
}

function changeMachine(oldMachine, newMachine, position) {
  if (isSamePosition(oldMachine, position)) {
    return newMachine;
  }
  return oldMachine;
}

function starterMachine(position) {
  return {
    position,
    direction: 0,
    type: 'STARTER',
    resource: { type: 'GOLD', state: 'SOLID' },
    isCrafting: false,
  };
}

function transporterMachine(position) {
  return {
    position,
    direction: 0,
    type: 'TRANSPORTER',
    onBoard: [],
  };
}

function emptyMachine(position) {
  return { position, type: 'EMPTY' };
}

export default (position, machines, action) => {
  let newMachines;
  switch (action) {
    case 'STARTER':
      newMachines = machines
        .map(machine => changeMachine(machine, starterMachine(position), position));
      break;
    case 'TRANSPORTER':
      newMachines = machines
        .map(machine => changeMachine(machine, transporterMachine(position), position));
      break;
    case 'REMOVE_MACHINE':
      newMachines = machines
        .map(machine => changeMachine(machine, emptyMachine(position), position));
      break;
    case 'ROTATE_MACHINE':
      newMachines = machines.map(machine => newDirection(machine, position));
      break;
    default:
      newMachines = [...machines];
      break;
  }
  return newMachines;
};
