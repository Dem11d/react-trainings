import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import defaultImage from './default.gif';
import Button from '../Button';

const Thumbnail = styled.img`
  width:230px;
`;

const Card = styled.div`
  display:flex;
  flex-direction:column;
  background-color: #999;
  margin: 15px;
  padding: 0;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.01);
  box-shadow: 0 4px 12px 0px rgba(0,0,0,.25);
  overflow: hidden;
`;

const BuyGoodContainer = styled.div`
  display: flex;
`;

const BuyGoodPanel = ({good: {id}, onBuy, quantityToBuy, changeQuantity}) => {
  console.log(quantityToBuy);
  return (
    <BuyGoodContainer>
      <Button onClick={() => onBuy(id, quantityToBuy)}>Buy one</Button>
    </BuyGoodContainer>
  );
};

BuyGoodPanel.propTypes = {
  good: propTypes.object,
  onBuy: propTypes.func,
  quantityToBuy: propTypes.number,
  changeQuantity: propTypes.func
};

const Good = (props) => {
  console.log(props);
  const {good} = props;
  return (
    <Card>
      <Thumbnail src={defaultImage} alt="default image"/>
      <p>{good.name}</p>
      <p>{good.description}</p>
      <p>{good.price}$</p>
      {good.quantity === 0 ? <p>Out of stock</p>
        : <BuyGoodPanel {...props}/>
      }
    </Card>

  );
};

Good.propTypes = {
  good: propTypes.object,
  onBuy: propTypes.func,
  changeQuantity: propTypes.func
};

export default Good;
