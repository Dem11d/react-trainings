export const BUY_GOOD = Symbol('buy good');
export const DISCARD_BUY_GOOD = Symbol('discard buy good');
export const REMOVE_GOOD_BY_ID = Symbol('remove good by id');
export const UPDATE_OR_CREATE_GOOD_BY_ID = Symbol('update or create good by id');

export function buyGood (id, quantity) {
  return { type: BUY_GOOD, id: id, quantity: quantity };
}

export function discartBuyGood (id, quantity) {
  return { type: DISCARD_BUY_GOOD, id: id, quantity: quantity };
}
