import React from 'react';

export default class ToolboxComponent extends React.Component {
  constructor(props, className, alt, image) {
    super(props);
    this.state = {
      styleName: className,
      altProperty: alt,
      img: image,
    };

    if (new.target === ToolboxComponent) {
      throw new TypeError('Cannot construct ToolboxComponent instances directly');
    }
  }

  render() {
    return (
      <img src={this.state.img} alt={this.state.altProperty} className={this.state.styleName} />
    );
  }
}
