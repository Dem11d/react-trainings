import NavBar from './NavBar';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(NavBar);
