import furnace from './furnace.png';
import Machine from './Machine';

export default class Furnace extends Machine {
  constructor(props) {
    super(props, 'Furnace machine', furnace);
  }
}
