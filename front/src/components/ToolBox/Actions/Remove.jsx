import remove from './remove.png';
import Action from './Action';

export default class Remove extends Action {
  constructor(props) {
    super(props, 'Remove action', remove);
  }
}
