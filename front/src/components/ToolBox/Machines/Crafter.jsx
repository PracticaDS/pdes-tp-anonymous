import crafter from './crafter.png';
import Machine from './Machine';

export default class Crafter extends Machine {
  constructor(props) {
    super(props, 'Crafter machine', crafter);
  }
}
