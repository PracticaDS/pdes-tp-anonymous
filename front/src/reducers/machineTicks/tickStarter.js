import { outputOf } from './helpers';

export default (machineStarter, floor) => {
  let newFloor = [...floor];
  let isCrafting = true;
  if (machineStarter.isCrafting) {
    newFloor = [
      ...floor,
      {
        position: outputOf(machineStarter),
        elements: [{ ...machineStarter.resource }],
      },
    ];
    isCrafting = false;
  }
  return {
    machine: { ...machineStarter, isCrafting },
    floor: newFloor,
  };
};
