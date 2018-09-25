import {connect} from 'react-redux';
import {compose} from 'recompose';

import Submit from './Submit';
import withNavBar from '../../HOCs/withNavBar';

const mapStateToProps = state => {
  return {
    goods: state.goods,
    cart: state.cart
  };
};

export default compose(
  connect(
    mapStateToProps
  ),
  withNavBar
)(Submit);
