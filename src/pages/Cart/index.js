import Cart from './Cart';
import {connect} from 'react-redux';
import {discartBuyGood} from '../../redux/actions';
import {createSelector} from 'reselect';

const cartSelector = createSelector(
  ({cart}) => cart,
  (cart) => cart);

const mapStateToProps = state => {
  return {
    cart: cartSelector(state)
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
