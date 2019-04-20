import rotate from '../gallery/rotate.png';
import './css/Components.css';
import Controller from './Controller';

export default class Rotate extends Controller {
  constructor(props) {
    super(props, 'Rotate controller', rotate);
  }
}
