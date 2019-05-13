import { connect } from 'react-redux';

import rotate from './rotate.png';
import toolboxElement, { mapDispatchToProps, mapStateToProps } from '../toolboxElement';

const RotateToolbox = props => toolboxElement(props, rotate, 'RotateAction', 'ROTATE_MACHINE');

export default connect(mapStateToProps, mapDispatchToProps)(RotateToolbox);
