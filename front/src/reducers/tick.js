import seller from './machineTicks/tickSeller';
import starter from './machineTicks/tickStarter';
import furnace from './machineTicks/tickFurnace';
import crafter from './machineTicks/tickCrafter';
import transporter from './machineTicks/tickTransporter';

function applyTick(machine, floor) {
  let fun = () => ({ machine, floor });
  switch (machine.type) {
    case 'STARTER':
      fun = starter;
      break;
    case 'TRANSPORTER':
      fun = transporter;
      break;
    case 'FURNACE':
      fun = furnace;
      break;
    case 'CRAFTER':
      fun = crafter;
      break;
    case 'SELLER':
      fun = seller;
      break;
    default:
      break;
  }
  return fun(machine, floor);
}

function executeTick(machines, floor) {
  return machines.reduce((partialState, machine) => {
    const machineWithNewFloor = applyTick(machine, partialState.floor);
    return {
      machines: [...partialState.machines, machineWithNewFloor.machine],
      floor: machineWithNewFloor.floor,
    };
  }, { machines: [], floor });
}

export default executeTick;
