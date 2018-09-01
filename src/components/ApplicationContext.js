import React, { Component } from 'react';
import PropTypes from 'prop-types';
import goods from '../goods.json';

const ApplicationContext = React.createContext();

export class Provider extends Component {
  state = {
    buyedGoods: [],
    goods: goods
  }
  buyGood = (goodId, quantity) => {
    // find required good
    const good = this.getGoodById(goodId);
    let buyedGood = this.getGoodById(goodId, 'buyedGoods');
    // correct quantity
    quantity = quantity > good.quantity ? good.quantity : quantity;
    // create object for buyedGoods array
    const updatedBuyedGood = {
      id: good.id,
      quantity: buyedGood ? buyedGood.quantity + quantity : quantity
    };
    this.updateOrCreateGoodById(goodId, updatedBuyedGood, 'buyedGoods');
    this.updateOrCreateGoodById(goodId, {quantity: good.quantity - quantity});
    setTimeout(console.log(this.state), 2000);
  }

  getGoodById = (goodId, source = 'goods') => {
    if (source) {
      source = this.state[source];
    }
    let filteredGoods = source.filter(good => good.id === goodId);
    // if there is more then one good, will be returned first one
    if (filteredGoods.length > 0) {
      // return copy of good
      return {...filteredGoods[0]};
    }
    return null;
  }

  updateOrCreateGoodById = (id, changes, source = 'goods') => {
    const resource = this.state[source];
    let goodToChange;
    let goods = resource.map((good) => {
      if (good.id === id) {
        goodToChange = good;
        return {...good, ...changes};
      }
      return good;
    });
    if (!goodToChange) {
      goods = [changes, ...goods];
    }
    // console.log(goods);
    console.log({[source]: goods});
    this.setState({[source]: goods});
  }

  static propTypes = {
    children: PropTypes.node
  }
  render () {
    return (<ApplicationContext.Provider value={{
      state: this.state,
      actions: {
        buyGood: this.buyGood
      }
    }}>
      {this.props.children}
    </ApplicationContext.Provider>);
  }
}

export const Consumer = ApplicationContext.Consumer;
