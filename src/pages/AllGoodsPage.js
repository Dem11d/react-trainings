import React from 'react'
import Good from '../elements/Good'
import { withStyles } from '@material-ui/core'
import propTypes from 'prop-types'
import { Consumer } from '../elements/AppProvider'
const goods = require('../goods.json')

const styles = {
  goods: {
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap'
  }
}

function AllGoods (props) {
  const {classes} = props
  return (
    <div>
      <p>All Goods</p>
      <div className={classes.goods}>
        {goods.map(good => {
          return (
            <div key={good.id}>
              <Consumer>
                {(state) => {
                  console.log(state)
                  return (<Good good={good} onBuy={state.buyGood}/>)
                }}
              </Consumer>
            </div>)
        })
        }
      </div>
    </div>
  )
}
AllGoods.propTypes = {
  classes: propTypes.object
}

export default withStyles(styles)(AllGoods)
