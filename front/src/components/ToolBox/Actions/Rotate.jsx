import rotate from './rotate.png';
import Action from './Action';

export default class Rotate extends Action {
  constructor(props) {
    super(props, 'Rotate action', rotate);
  }
}
