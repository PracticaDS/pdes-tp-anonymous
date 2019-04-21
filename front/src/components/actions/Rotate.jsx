import rotate from '../../gallery/rotate.png';
import '../css/Components.css';
import Action from './Action';

export default class Rotate extends Action {
  constructor(props) {
    super(props, 'Rotate action', rotate);
  }
}
