import { getElements, removeElements } from './helpers';

export default (machineSeller, floor) => {
  let newMachineSeller = { ...machineSeller };
  if (machineSeller.toSell.length > 0) {
    newMachineSeller = {
      ...machineSeller,
      toSell: [],
    };
  }

  newMachineSeller = {
    ...newMachineSeller,
    toSell: getElements(newMachineSeller.position, floor),
  };
  return {
    machine: newMachineSeller,
    floor: removeElements(newMachineSeller.position, floor),
  };
};
