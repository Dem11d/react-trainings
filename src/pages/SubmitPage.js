import React from 'react';
import PropTypes from 'prop-types';
import { WithApplicationContext } from '../components/ApplicationContext';
import { SubmitGood } from '../elements/SubmitGood';
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
  const {state: {buyedGoods}, actions: {getGoodById}} = props.context;
  return (
    <div>
      <p>Submit page</p>
      <Header>
        <p>Name</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total price</p>
      </Header>
      {buyedGoods.map((good) => (
        <SubmitGood key={good.id} {...getGoodById(good.id)} {...good}/>
      ))}
      <OveralSumContainer>
        <p>Total:
          {(buyedGoods.reduce((prev, curr) => {
            return prev + getGoodById(curr.id).price * curr.quantity;
          }, 0))}
        </p>
      </OveralSumContainer>
    </div>
  );
};

SubmitPage.propTypes = {
  context: PropTypes.object
};

export default WithApplicationContext(SubmitPage);
