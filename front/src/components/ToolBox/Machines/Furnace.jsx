import { connect } from 'react-redux';

import furnace from './furnace.png';
import toolboxMachine, { mapDispatchToProps, mapStateToProps } from './toolboxMachine';

const FurnaceToolbox = props => toolboxMachine(props, furnace, 'FurnaceToolbox', 'FURNACE');

export default connect(mapStateToProps, mapDispatchToProps)(FurnaceToolbox);
