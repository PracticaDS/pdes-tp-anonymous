import seller from './seller.png';
import Machine from './Machine';

export default class Seller extends Machine {
  constructor(props) {
    super(props, 'Seller machine', seller);
  }
}
