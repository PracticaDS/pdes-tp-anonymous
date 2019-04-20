import move from '../gallery/move.png';
import './css/Components.css';
import Controller from './Controller';

export default class Move extends Controller {
  constructor(props) {
    super(props, 'Move controller', move);
  }
}
