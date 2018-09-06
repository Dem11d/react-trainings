import React, {Fragment} from 'react';
import Good from '../elements/Good';
import {WithApplicationContext} from '../components/ApplicationContext';
import styled from 'styled-components';

const GoodsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function AllGoods (props) {
  const {state: {goods}, actions: {buyGood}} = props.context;
  return (
    <Fragment>
      <p>All Goods</p>
      <GoodsContainer>
        {goods.map(good => {
          return (
            <div key={good.id}>
              <Good good={good} onBuy={buyGood}/>
            </div>
          );
        })}
      </GoodsContainer>
    </Fragment>
  );
}

export default WithApplicationContext(AllGoods);
