import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {compose} from 'recompose';

import Cart from './Cart';
import {discartBuyGood} from '../../redux/actions';
import withNavBar from '../../HOCs/withNavBar';

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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavBar
)(Cart);
