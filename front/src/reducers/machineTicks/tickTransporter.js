import { outputOf, getElements, removeElements } from './helpers';

export default (machineTransporter, floor) => {
  let newFloor = [...floor];
  let newMachineTransporter = { ...machineTransporter };
  if (machineTransporter.onBoard.length > 0) {
    newFloor = [
      ...floor,
      {
        position: outputOf(machineTransporter),
        elements: [{ ...machineTransporter.onBoard }],
      },
    ];
    newMachineTransporter = {
      ...machineTransporter,
      onBoard: [],
    };
  }

  newMachineTransporter = {
    ...newMachineTransporter,
    onBoard: getElements(newMachineTransporter.position, floor),
  };

  return {
    machine: newMachineTransporter,
    floor: removeElements(newMachineTransporter.position, newFloor),
  };
};
