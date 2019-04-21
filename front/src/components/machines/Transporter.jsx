import transporter from '../../gallery/transporter.png';
import '../css/Components.css';
import Machine from './Machine';

export default class Transporter extends Machine {
  constructor(props) {
    super(props, 'Transporter machine', transporter);
  }
}
