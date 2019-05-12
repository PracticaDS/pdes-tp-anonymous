import { connect } from 'react-redux';
import lodash from 'lodash';
import React from 'react';

import Machine from './Machine.jsx';

class EngineGrid extends React.Component {
  render() {
    const table = lodash.chunk(this.props.machines, this.props.width).map((row, i) => (
      <tr key={i}>
        {row.map((machine, j) => (
          <td key={j}>
            <Machine key={j} {...machine} />
          </td>
        ))}
      </tr>
    ));

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

const mapStateToProps = state => ({
  width: state.width,
  machines: state.machines,
});

const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(EngineGrid);
