import { connect } from 'react-redux';

import crafter from './crafter.png';
import toolboxMachine, { mapDispatchToProps, mapStateToProps } from './toolboxMachine';

const CrafterToolbox = props => toolboxMachine(props, crafter, 'CrafterMachine', 'CRAFTER');

export default connect(mapStateToProps, mapDispatchToProps)(CrafterToolbox);
