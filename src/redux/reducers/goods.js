import goods from '../../goods.json';
import {BUY_GOOD, DISCARD_BUY_GOOD} from '../actionTypes';

const buyGood = (state, payload) => {
  console.log(payload);
  const {id, quantity} = payload;

  let good = state.find(good => good.id === id);
  if (!good) {
    return state;
  }
  const newQuantity = good.quantity - quantity;
  return state.map(localGood => ({...localGood, ...(localGood.id === good.id && {quantity: newQuantity})}));
};

const discardBuyGood = (state, payload) => {
  const {id, quantity} = payload;

  let good = state.find(good => good.id === id);
  if (!good) {
    return state;
  }
  const newQuantity = good.quantity + quantity;
  return state.map(localGood => ({...localGood, ...(localGood.id === good.id && {quantity: newQuantity})}));
};

export default function (state = goods, payload) {
  switch (payload.type) {
    case BUY_GOOD:
      return buyGood(state, payload);
    case DISCARD_BUY_GOOD:
      return discardBuyGood(state, payload);
    default:
      return state;
  }
}
