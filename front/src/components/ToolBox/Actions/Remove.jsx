import { connect } from 'react-redux';

import remove from './remove.png';
import toolboxElement, { mapDispatchToProps, mapStateToProps } from '../toolboxElement';

const RemoveToolbox = props => toolboxElement(props, remove, 'RemoveAction', 'REMOVE_MACHINE');

export default connect(mapStateToProps, mapDispatchToProps)(RemoveToolbox);
