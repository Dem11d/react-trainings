import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import defaultImage from './default.gif';
import Button from '../Button';

const Card = styled.div`
  display:flex;
  flex-direction:column;
  background-color: #999;
  margin: 15px;
  padding: 0;
  border-radius: 15px;
  border: 1px solid rgba(0,0,0,0.01);
  box-shadow: 0 4px 12px 0px rgba(0,0,0,.25);
  overflow: hidden
`;

const Thumbnail = styled.img`
  width:230px;
`;

const Good = (props) => {
  const {good, onBuy} = props;
  return (
    <Card>
      <Thumbnail src={defaultImage} alt="default image"/>
      <p>{good.name}</p>
      <p>{good.description}</p>

      {good.quantity === 0 ? <p>Out of stock</p>
        : <Button onClick={() => onBuy(good.id, 1)}>Buy one</Button>
      }
    </Card>

  );
};

Good.propTypes = {
  good: propTypes.object,
  onBuy: propTypes.func
};

export default Good;
