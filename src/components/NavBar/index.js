import {connect} from 'react-redux';
import {compose, withProps, mapProps} from 'recompose';
import {createSelector} from 'reselect';

import NavBar from './NavBar';

const showCartLinkSelector = createSelector(
  ({cart}) => cart,
  (cart) => {
    return cart.length > 0;
  }
);

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default compose(
  connect(mapStateToProps),
  withProps((state) => ({
    showCartLink: showCartLinkSelector(state)
  })),
  mapProps(({cart, ...other}) => ({...other}))
)(NavBar);
