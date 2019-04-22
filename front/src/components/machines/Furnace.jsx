import furnace from '../../gallery/furnace.png';
import '../css/Components.css';
import Machine from './Machine';

export default class Furnace extends Machine {
  constructor(props) {
    super(props, 'Furnace machine', furnace);
  }
}
