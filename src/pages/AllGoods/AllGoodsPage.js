import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Good from '../../elements/Good';
import styled from 'styled-components';

const GoodsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function AllGoods (props) {
  // const {state: {goods}, actions: {buyGood}} = props.context;
  const {goods, buyGood} = props;
  return (
    <Fragment>
      <p>All Goods</p>
      <GoodsContainer>
        {goods.map(good => {
          return (
            <div key={good.id}>
              <Good goodId={good.id} onBuy={buyGood}/>
            </div>
          );
        })}
      </GoodsContainer>
    </Fragment>
  );
}

AllGoods.propTypes = {
  goods: PropTypes.array,
  buyGood: PropTypes.func
};

export default AllGoods;
