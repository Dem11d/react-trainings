import {BUY_GOOD, DISCARD_BUY_GOOD} from './actionTypes';

export function buyGood (id, quantity) {
  return { type: BUY_GOOD, id: id, quantity: quantity };
}

export function discartBuyGood (id, quantity) {
  return { type: DISCARD_BUY_GOOD, id: id, quantity: quantity };
}
