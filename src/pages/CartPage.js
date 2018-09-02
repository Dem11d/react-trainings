import React from 'react';
import {Consumer} from '../components/ApplicationContext';

export default function Cart () {
  return (
    <div>
      <p>Cart page</p>
      <Consumer>
        {({state: {buyedGoods}, actions: {getGoodById}}) => {
          console.log(buyedGoods);
          return buyedGoods.map(cartGood => {
            const good = getGoodById(cartGood.id);
            return (
              <div key={good.id}>
                <p>Name: <span>{good.name}</span></p>
                <p>Quantity: {cartGood.quantity}</p>
              </div>
            );
          });
        }}
      </Consumer>
    </div>
  );
}
