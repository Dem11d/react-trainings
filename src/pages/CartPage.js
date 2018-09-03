import React from 'react';
import {Consumer} from '../components/ApplicationContext';
import CartGood from '../elements/CartGood';

export default function Cart () {
  return (
    <div>
      <p>Cart page</p>
      <Consumer>
        {({state: {buyedGoods}, actions: {getGoodById}}) => {
          return buyedGoods.map(cartGood => {
            const good = getGoodById(cartGood.id);
            return (
              <CartGood key={good.id} {...cartGood} {...good} />
            );
          });
        }}
      </Consumer>
    </div>
  );
}
