import { connect } from 'react-redux';

import move from './move.png';
import toolboxElement, { mapDispatchToProps, mapStateToProps } from '../toolboxElement';

const MoveToolbox = props => toolboxElement(props, move, 'MoveAction', 'MOVE_MACHINE');

export default connect(mapStateToProps, mapDispatchToProps)(MoveToolbox);
