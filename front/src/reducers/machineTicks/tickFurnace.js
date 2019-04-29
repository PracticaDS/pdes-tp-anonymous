import { outputOf, getElements, removeElements } from './helpers';

export default (machineFurnace, floor) => {
  let newFloor = [...floor];
  let newMachineFurnace = { ...machineFurnace };
  if (machineFurnace.doneFurnace.length > 0) {
    newFloor = [
      ...floor,
      {
        position: outputOf(machineFurnace),
        elements: [...machineFurnace.doneFurnace],
      },
    ];
    newMachineFurnace = {
      ...machineFurnace,
      doneFurnace: [],
    };
  } else if (machineFurnace.toFurnace.length > 0) {
    newMachineFurnace = {
      ...machineFurnace,
      toFurnace: [],
      doneFurnace: machineFurnace.toFurnace.map(material => ({ ...material, state: 'LIQUID' })),
    };
  }

  newMachineFurnace = {
    ...newMachineFurnace,
    toFurnace: [...newMachineFurnace.toFurnace, ...getElements(newMachineFurnace.position, floor)],
  };
  return {
    machine: newMachineFurnace,
    floor: removeElements(newMachineFurnace.position, newFloor),
  };
};
