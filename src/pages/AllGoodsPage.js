import React from 'react';
import Good from '../elements/Good';
import { withStyles } from '@material-ui/core';
import propTypes from 'prop-types';
import {Consumer} from '../components/ApplicationContext';

const styles = {
  goods: {
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap'
  }
};

function AllGoods (props) {
  const {classes} = props;
  return (
    <div>
      <p>All Goods</p>
      <div className={classes.goods}>
        <Consumer>
          {({state: {goods}}) => (
            goods.map(good => {
              return (
                <div key={good.id}>
                  <Consumer>
                    {({state, actions: {buyGood}}) => {
                      return <Good good={good} onBuy={buyGood}/>;
                    }}
                  </Consumer>
                </div>
              );
            })
          )}
        </Consumer>
      </div>
    </div>
  );
}
AllGoods.propTypes = {
  classes: propTypes.object
};

export default withStyles(styles)(AllGoods);
