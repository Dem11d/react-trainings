import {createSelector} from 'reselect';
import {connect} from 'react-redux';
import {compose, mapProps} from 'recompose';

import CartGood from './CartGood';

const goodSelector = createSelector(
  ({goods}) => goods,
  (state, {goodId}) => goodId,
  (goods, goodId) => goods.find(good => good.id === goodId)
);

const cartGoodSelector = createSelector(
  ({cart}) => cart,
  (state, {goodId}) => goodId,
  (cart, goodId) => cart.find(good => good.id === goodId)
);

const mapStateToProps = (state, props) => ({
  good: goodSelector(state, props),
  cartGood: cartGoodSelector(state, props)
});

export default compose(
  connect(mapStateToProps),
  mapProps(({good, cartGood, ...rest}) => ({...good, ...cartGood, ...rest}))
)(CartGood);
