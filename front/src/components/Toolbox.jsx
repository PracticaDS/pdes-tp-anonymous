import React from 'react';
import './css/Components.css';

export default class Toolbox extends React.Component {
  constructor(props, className, alt, imagen) {
    super(props);
    this.state = {
      styleName: className,
      altProperty: alt,
      img: imagen,
    };
  }

  render() {
    return (
      <img src={this.state.img} alt={this.state.altProperty} className={this.state.styleName} />
    );
  }
}
