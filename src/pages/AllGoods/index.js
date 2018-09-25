import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {compose} from 'recompose';

import AllGoods from './AllGoodsPage';
import {buyGood} from '../../redux/actions';
import withNavBar from '../../HOCs/withNavBar';

const goodsSelector = createSelector(
  ({goods}) => (goods),
  (goods) => (goods)
);

const mapStateToProps = state => {
  return {
    goods: goodsSelector(state)
  };
};

const mapDispatchToProps = (dispatch, ...other) => {
  return {
    handleBuyGood: (id, quantity) => dispatch(buyGood(id, quantity))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps),
  withNavBar
)(AllGoods);
