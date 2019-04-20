import starter from '../gallery/starter.png';
import './css/Components.css';
import Machine from './Machine';

export default class Starter extends Machine {
  constructor(props) {
    super(props, 'Starter machine', starter);
  }
}
