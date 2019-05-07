import starter from './starter.png';
import Machine from './Machine';

export default class Starter extends Machine {
  constructor(props) {
    super(props, 'Starter machine', starter);
  }
}
