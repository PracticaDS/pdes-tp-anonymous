import { connect } from 'react-redux';

import seller from './seller.png';
import toolboxElement, { mapDispatchToProps, mapStateToProps } from '../toolboxElement';

const SellerToolbox = props => toolboxElement(props, seller, 'SellerMachine', 'SELLER');

export default connect(mapStateToProps, mapDispatchToProps)(SellerToolbox);
