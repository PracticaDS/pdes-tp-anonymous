function applyTick(machine, floor) {
  switch (machine.type) {
    default:
      return { machine, floor };
  }
}

function executeTick(machines, floor) {
  return machines.reduce((machine, partialState) => {
    const machineWithNewFloor = applyTick(machine, partialState.floor);
    return {
      machines: [...partialState.machines, machineWithNewFloor.machine],
      floor: machineWithNewFloor.floor,
    };
  }, { machines: [], floor });
}

export default executeTick;
