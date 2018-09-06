import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GoodContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding:10px;
    margin:0;
    background-color: #999;
    border: 1px solid #333;
    box-shadow: 0 4px 12px 0px rgba(0,0,0,.25);
`;

export const SubmitGood = (props) => {
  const { name, quantity, price } = props;

  return (
    <GoodContainer>
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{price}</p>
      <p>{price * quantity}</p>
    </GoodContainer>
  );
};

SubmitGood.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number
};
