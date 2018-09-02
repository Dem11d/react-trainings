import React from 'react';
import propTypes from 'prop-types';
import {Button} from 'react-materialize';
import styled from 'styled-components';
import defaultImage from './default.gif';

const Card = styled.div`
  display:flex;
  flex-direction:column;
  background-color: #999;
  margin: 15px;
  padding: 15px 0;
  border: 1px solid #333;
  border-radius: 15px;
`;

const Thumbnail = styled.img`
  width:230px;
`;

function Good (props) {
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
}

Good.propTypes = {
  good: propTypes.object,
  onBuy: propTypes.func
};

export default Good;
