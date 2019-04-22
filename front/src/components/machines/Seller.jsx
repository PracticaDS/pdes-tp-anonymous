import seller from '../../gallery/seller.png';
import '../css/Components.css';
import Machine from './Machine';

export default class Seller extends Machine {
  constructor(props) {
    super(props, 'Seller machine', seller);
  }
}
