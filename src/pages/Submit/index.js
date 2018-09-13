import Submit from './Submit';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    goods: state.goods,
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Submit);
