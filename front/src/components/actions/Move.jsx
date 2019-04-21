import move from '../../gallery/move.png';
import '../css/Components.css';
import Action from './Action';

export default class Move extends Action {
  constructor(props) {
    super(props, 'Move action', move);
  }
}
