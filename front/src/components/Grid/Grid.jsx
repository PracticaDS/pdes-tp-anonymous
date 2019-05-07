import React from 'react';
import './Grid.css';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.x,
      height: props.y,
    };
  }

  render() {
    const table = [];
    for (let i = 0; i < this.state.height; i += 1) {
      const children = [];
      for (let j = 0; j < this.state.width; j += 1) {
        children.push(
          <td key={j}>
            <div className="empty" />
          </td>,
        );
      }
      table.push(<tr key={i}>{children}</tr>);
    }

    return (
      <div>
        <h1>Revolución Industrial</h1>
        <table className="grid">
          <tbody>
            {table}
          </tbody>
        </table>
      </div>
    );
  }
}
