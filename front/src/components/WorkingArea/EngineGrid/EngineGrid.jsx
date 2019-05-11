import React from 'react';

export default class EngineGrid extends React.Component {
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
      <div className="engine-grid">
        <table>
          <tbody>
            {table}
          </tbody>
        </table>
      </div>
    );
  }
}
