import { connect } from 'react-redux';

import transporter from './transporter.png';
import toolboxMachine, { mapDispatchToProps, mapStateToProps } from './toolboxMachine';

const TransporterToolbox = props => toolboxMachine(props, transporter, 'TransporterMachine', 'TRANSPORTER');

export default connect(mapStateToProps, mapDispatchToProps)(TransporterToolbox);
