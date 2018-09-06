import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {WithApplicationContext} from '../components/ApplicationContext';
import CartGood from '../elements/CartGood';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Navigation } from '../components/NavBar';

const SubmitOrderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

const Cart = (props) => {
  const {state: {buyedGoods}, actions: {getGoodById}} = props.context;
  return (
    <div>
      <p>Cart page</p>
      {buyedGoods.length > 0
        ? <Fragment>
          {buyedGoods.map(cartGood => (
            <CartGood key={cartGood.id} {...getGoodById(cartGood.id)} {...cartGood}/>
          ))}
          <SubmitOrderContainer>
            <Navigation>
              <Link to="/submit">Place order</Link>
            </Navigation>
          </SubmitOrderContainer>
        </Fragment>
        : (<p>No goods in cart</p>)
      }
    </div>
  );
};

Cart.propTypes = {
  context: PropTypes.object
};

export default WithApplicationContext(Cart);
