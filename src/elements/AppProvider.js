import React, { Component } from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext()

export default class AppProvider extends Component {
  state={
    test: 'test',
    buyGood: this.buyGood,
    buyedGoods: []
  }
  buyGood = (good) => {
    this.setState(({buyedGoods}) => ({buyedGoods: [good, ...buyedGoods]}))
    console.log(this.state)
  }
  static propTypes={
    children: PropTypes.node
  }

  render () {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }
}

export const Consumer = AppContext.Consumer
