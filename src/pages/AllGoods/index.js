import AllGoods from './AllGoodsPage';
import {connect} from 'react-redux';
import {buyGood} from '../../redux/actions';

const mapStateToProps = state => {
  return {
    goods: state.goods
  };
};

const mapDispatchToProps = (dispatch, ...other) => {
  return {
    buyGood: (id, quantity) => dispatch(buyGood(id, quantity))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllGoods);
