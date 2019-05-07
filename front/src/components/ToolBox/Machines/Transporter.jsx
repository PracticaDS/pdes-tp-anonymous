import transporter from './transporter.png';
import Machine from './Machine';

export default class Transporter extends Machine {
  constructor(props) {
    super(props, 'Transporter machine', transporter);
  }
}
