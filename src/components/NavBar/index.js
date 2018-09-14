import NavBar from './NavBar';
import {connect} from 'react-redux';
import {compose, withProps, mapProps} from 'recompose';

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default compose(
  connect(mapStateToProps),
  withProps(({cart}) => ({
    showCartLink: cart.length > 0
  })),
  mapProps(({cart, ...other}) => ({...other}))
)(NavBar);
