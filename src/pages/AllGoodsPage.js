import React from 'react';
import Good from '../elements/Good';
import {Consumer} from '../components/ApplicationContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1920px;
`;

const GoodsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function AllGoods (props) {
  return (
    <Wrapper>
      <p>All Goods</p>
      <GoodsContainer>
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
      </GoodsContainer>
    </Wrapper>
  );
}

export default AllGoods;
