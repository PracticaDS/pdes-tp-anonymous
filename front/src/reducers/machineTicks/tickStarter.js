import { outputOf } from './helpers';

export default (machineStarter, floor) => {
  let newFloor = [...floor];
  if (machineStarter.isCrafting) {
    newFloor = [
      ...floor,
      {
        position: outputOf(machineStarter),
        elements: [{ ...machineStarter.resource }],
      },
    ];
  }
  return {
    machine: { ...machineStarter, isCrafting: false },
    floor: newFloor,
  };
};
