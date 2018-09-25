import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import {compose, withState} from 'recompose';

import Good from './Good';

const goodSelector = createSelector(
  ({ goods }) => goods,
  (state, {goodId}) => goodId,
  (goods, goodId) => goods.find(good => good.id === goodId)
);

const mapStateToProps = (state, props) => ({
  good: goodSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('quantityToBuy', 'changeQuantity', 1)
)(Good);
