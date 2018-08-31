import React from 'react'
import {Consumer} from '../elements/AppProvider'
// import Good from '../elements/Good'

export default function Basket () {
  return (
    <div>
      <p>Basket page</p>
      <Consumer>
        {({buyedGoods}) => buyedGoods.length}
        {/* {(buyedGoods) => {
          return (<div>
            {buyedGoods.map(good => (<Good key={good.id} good={good}/>))}
          </div>
          )
        }} */}
      </Consumer>
    </div>
  )
}
