import React from 'react';
import PropTypes from 'prop-types';
import { WithApplicationContext } from '../../components/ApplicationContext';
import { SubmitGood } from '../../elements/SubmitGood';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const OveralSumContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

const SubmitPage = (props) => {
  const {cart, goods} = props;
  return (
    <div>
      <p>Submit page</p>
      <Header>
        <p>Name</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total price</p>
      </Header>
      {cart.map((good) => (
        <SubmitGood key={good.id} {...goods.find((originalGood) => good.id === originalGood.id)} {...good}/>
      ))}
      <OveralSumContainer>
        <p>Total:
          {(cart.reduce((prev, curr) => {
            return prev + goods.find((good) => good.id === curr.id).price * curr.quantity;
          }, 0))}
        </p>
      </OveralSumContainer>
    </div>
  );
};

SubmitPage.propTypes = {
  cart: PropTypes.array,
  goods: PropTypes.array
};

export default WithApplicationContext(SubmitPage);
