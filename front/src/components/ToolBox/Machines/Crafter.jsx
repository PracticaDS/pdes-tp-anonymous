import { connect } from 'react-redux';

import crafter from './crafter.png';
import toolboxElement, { mapDispatchToProps, mapStateToProps } from '../toolboxElement';

const CrafterToolbox = props => toolboxElement(props, crafter, 'CrafterMachine', 'CRAFTER');

export default connect(mapStateToProps, mapDispatchToProps)(CrafterToolbox);
