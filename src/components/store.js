import { createStore } from 'redux';
import goods from '../goods.json';

const store = createStore({
  buyedGoods: [],
  goods: goods
});
