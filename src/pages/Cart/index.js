import Cart from './Cart';
import {connect} from 'react-redux';
import {discartBuyGood} from '../../redux/actions';

const mapStateToProps = state => {
  return {
    goods: state.goods,
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch, ...other) => {
  return {
    discardBuyGood: (id, quantity) => dispatch(discartBuyGood(id, quantity))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
