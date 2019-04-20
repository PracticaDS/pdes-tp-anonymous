import crafter from '../gallery/crafter.png';
import './css/Components.css';
import Machine from './Machine';

export default class Crafter extends Machine {
  constructor(props) {
    super(props, 'Crafter machine', crafter);
  }
}
