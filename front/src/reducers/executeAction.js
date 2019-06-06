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

function starterMachine(position, resource) {
  return {
    position,
    direction: 0,
    type: 'STARTER',
    resource,
    isCrafting: false,
  };
}

function crafterMachine(position) {
  return {
    position,
    direction: 0,
    type: 'CRAFTER',
    recipe: null,
    ingredients: [],
    isCrafting: false,
  };
}

function furnaceMachine(position) {
  return {
    position,
    direction: 0,
    type: 'FURNACE',
    toFurnace: [],
    doneFurnace: [],
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

function sellerMachine(position) {
  return {
    position,
    direction: 0,
    type: 'SELLER',
    toSell: [],
  };
}

function emptyMachine(position) {
  return { position, type: 'EMPTY' };
}

function swapMachines(firstPosition, secondPosition, machines) {
  const firstMachine = machines.find(machine => isSamePosition(machine, firstPosition));
  const secondMachine = machines.find(machine => isSamePosition(machine, secondPosition));
  return machines.map((machine) => {
    if (isSamePosition(machine, firstPosition)) {
      return { ...secondMachine, position: firstMachine.position };
    }
    if (isSamePosition(machine, secondPosition)) {
      return { ...firstMachine, position: secondMachine.position };
    }
    return machine;
  });
}

export default (position, machines, payload) => {
  let newMachines;
  switch (payload.action) {
    case 'STARTER':
      newMachines = machines
        .map(machine => changeMachine(machine, starterMachine(position, payload.data), position));
      break;
    case 'CRAFTER':
      newMachines = machines
        .map(machine => changeMachine(machine, crafterMachine(position), position));
      break;
    case 'FURNACE':
      newMachines = machines
        .map(machine => changeMachine(machine, furnaceMachine(position), position));
      break;
    case 'TRANSPORTER':
      newMachines = machines
        .map(machine => changeMachine(machine, transporterMachine(position), position));
      break;
    case 'SELLER':
      newMachines = machines
        .map(machine => changeMachine(machine, sellerMachine(position), position));
      break;
    case 'MOVE_MACHINE':
      newMachines = swapMachines(payload.data, position, machines);
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
