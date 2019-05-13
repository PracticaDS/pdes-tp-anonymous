import { connect } from 'react-redux';

import transporter from './transporter.png';
import toolboxElement, { mapDispatchToProps, mapStateToProps } from '../toolboxElement';

const TransporterToolbox = props => toolboxElement(props, transporter, 'TransporterMachine', 'TRANSPORTER');

export default connect(mapStateToProps, mapDispatchToProps)(TransporterToolbox);
