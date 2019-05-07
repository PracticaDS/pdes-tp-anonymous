import ToolboxComponent from '../ToolboxComponent';

export default class Action extends ToolboxComponent {
  constructor(props, alt, image) {
    super(props, 'action', alt, image);

    if (new.target === Action) {
      throw new TypeError('Cannot construct Action instances directly');
    }
  }
}
