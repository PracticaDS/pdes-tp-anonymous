import { connect } from 'react-redux';

import starter from './starter.png';
import toolboxMachine, { mapDispatchToProps, mapStateToProps } from './toolboxMachine';

const StarterToolbox = props => toolboxMachine(props, starter, 'StarterMachine', 'STARTER');

export default connect(mapStateToProps, mapDispatchToProps)(StarterToolbox);
