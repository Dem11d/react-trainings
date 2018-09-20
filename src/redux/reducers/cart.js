import {BUY_GOOD, DISCARD_BUY_GOOD} from '../actionTypes';

const buyGood = (state, payload) => {
  const {id, quantity} = payload;

  let good = state.find(good => good.id === id);
  if (!good) {
    return [{id, quantity}, ...state];
  }
  const index = state.indexOf(good);
  const newState = [...state];
  newState[index] = {id, quantity: good.quantity + quantity};
  return newState;
};

const discardBuyGood = (state, payload) => {
  const {id, quantity} = payload;

  let good = state.find(good => good.id === id);
  if (!good) {
    return state;
  }
  const newQuantity = good.quantity - quantity;
  return newQuantity <= 0
    ? state.filter(localGood => localGood.id !== good.id)
    : state.map(localGood => ({...localGood, ...(localGood.id === good.id && {quantity: newQuantity})}));
};

export default (state = [{id: 'good1', quantity: 1}], payload) => {
  switch (payload.type) {
    case BUY_GOOD:

      return buyGood(state, payload);
    case DISCARD_BUY_GOOD:
      return discardBuyGood(state, payload);
    default:
      return state;
  }
};
