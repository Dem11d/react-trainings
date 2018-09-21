import {connect} from 'react-redux';
import {createSelector} from 'reselect';

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

export default connect(mapStateToProps, mapDispatchToProps)(Good);
