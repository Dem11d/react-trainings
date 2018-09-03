import React from 'react';
import styled from 'styled-components';
import defaultImage from './default.gif';

const Card = styled.div`
    display:flex;
    flex-direction: row;
    padding:10px;
    margin:15px;
    background-color: #999;
    border: 1px solid #333;
    border-radius: 10px;
`;

const Thumbnail = styled.img`
    height:100px;
`;

export default function CartGood ({quantity, name, ...rest}) {
  console.log(rest);
  return (
    <Card>
      <Thumbnail src={defaultImage} alt="default image"/>
      <p>{name}</p>
      <p>Quantity: {quantity}</p>
    </Card>
  );
}
