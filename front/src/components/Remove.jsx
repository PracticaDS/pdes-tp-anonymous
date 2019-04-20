import remove from '../gallery/remove.png';
import './css/Components.css';
import Controller from './Controller';

export default class Remove extends Controller {
  constructor(props) {
    super(props, 'Remove controller', remove);
  }
}
