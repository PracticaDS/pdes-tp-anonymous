import { connect } from 'react-redux';

import furnace from './furnace.png';
import toolboxElement, { mapDispatchToProps, mapStateToProps } from '../toolboxElement';

const FurnaceToolbox = props => toolboxElement(props, furnace, 'FurnaceToolbox', 'FURNACE');

export default connect(mapStateToProps, mapDispatchToProps)(FurnaceToolbox);
