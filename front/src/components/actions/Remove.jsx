import remove from '../../gallery/remove.png';
import '../css/Components.css';
import Action from './Action';

export default class Remove extends Action {
  constructor(props) {
    super(props, 'Remove action', remove);
  }
}
