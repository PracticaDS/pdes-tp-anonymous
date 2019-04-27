import React from 'react';
import './css/Components.css';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.x,
      high: props.y,
    };
  }

  render() {
    const table = [];
    for (let i = 0; i < this.state.high; i += 1) {
      const children = [];
      for (let j = 0; j < this.state.width; j += 1) {
        children.push(
          <td>
            <div className="empty" />
          </td>,
        );
      }

      table.push(<tr>{children}</tr>);
    }

    return (
      <div>
        <table className="grid">
          {table}
        </table>
      </div>
    );
  }
}
