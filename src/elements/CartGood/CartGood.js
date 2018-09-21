import React from 'react';
import styled from 'styled-components';
import defaultImage from './default.gif';
import PropTypes from 'prop-types';
import Button from '../Button';

const Card = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding:10px;
    margin:15px;
    background-color: #999;
    border: 1px solid #333;
    border-radius: 10px;
    box-shadow: 0 4px 12px 0px rgba(0,0,0,.25);
`;

const Thumbnail = styled.img`
    height:100px;
`;

const CartGood = ({quantity, name, id, discardBuyGood}) => {
  return (
    <Card>
      <Thumbnail src={defaultImage} alt="default image"/>
      <p>{name}</p>
      <p>Quantity: {quantity}</p>
      <p>test text</p>
      <Button onClick={() => discardBuyGood(id, quantity)}>Delete</Button>
    </Card>
  );
};

CartGood.propTypes = {
  quantity: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.string,
  discardBuyGood: PropTypes.func
};

export default CartGood;
