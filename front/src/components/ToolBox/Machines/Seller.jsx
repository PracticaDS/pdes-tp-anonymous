import { connect } from 'react-redux';

import seller from './seller.png';
import toolboxMachine, { mapDispatchToProps, mapStateToProps } from './toolboxMachine';

const SellerToolbox = props => toolboxMachine(props, seller, 'SellerMachine', 'SELLER');

export default connect(mapStateToProps, mapDispatchToProps)(SellerToolbox);
