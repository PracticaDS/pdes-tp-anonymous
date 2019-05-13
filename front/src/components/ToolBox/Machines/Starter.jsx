import { connect } from 'react-redux';

import starter from './starter.png';
import toolboxElement, { mapDispatchToProps, mapStateToProps } from '../toolboxElement';

const StarterToolbox = props => toolboxElement(props, starter, 'StarterMachine', 'STARTER');

export default connect(mapStateToProps, mapDispatchToProps)(StarterToolbox);
