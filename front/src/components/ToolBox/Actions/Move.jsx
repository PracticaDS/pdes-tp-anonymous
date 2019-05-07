import move from './move.png';
import Action from './Action';

export default class Move extends Action {
  constructor(props) {
    super(props, 'Move action', move);
  }
}
