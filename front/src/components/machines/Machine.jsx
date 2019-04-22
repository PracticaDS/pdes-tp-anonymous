import '../css/Components.css';
import ToolboxComponent from '../ToolboxComponent';

export default class Machine extends ToolboxComponent {
  constructor(props, alt, image) {
    super(props, 'machine', alt, image);
    if (new.target === Machine) {
      throw new TypeError('Cannot construct Machine instances directly');
    }
  }
}
