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
  const {goods, handleBuyGood} = props;
  return (
    <Fragment>
      <p>All Goods</p>
      <GoodsContainer>
        {goods.map(good => {
          return (
            <div key={good.id}>
              <Good goodId={good.id} onBuy={handleBuyGood}/>
            </div>
          );
        })}
      </GoodsContainer>
    </Fragment>
  );
}

AllGoods.propTypes = {
  goods: PropTypes.array,
  handleBuyGood: PropTypes.func
};

export default AllGoods;
