import AllGoods from './AllGoodsPage';
import {connect} from 'react-redux';
import {buyGood} from '../../redux/actions';
import {createSelector} from 'reselect';

const goodsSelector = createSelector(
  ({goods}) => (goods),
  (goods) => (goods)
);

const mapStateToProps = state => {
  console.log('mpsttp', state);

  return {
    goods: goodsSelector(state)
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
