import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import CartGood from '../../elements/CartGood';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Navigation } from '../../elements/Navigation';

const SubmitOrderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

const Cart = (props) => {
  const {cart, goods, discardBuyGood} = props;
  console.log(props);
  return (
    <div>
      <p>Cart page</p>
      {cart.length > 0
        ? <Fragment>
          {cart.map(cartGood => (
            <CartGood
              discardBuyGood={discardBuyGood}
              key={cartGood.id}
              {...(goods.find((good) => good.id === cartGood.id))}
              {...cartGood}/>
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
  context: PropTypes.object,
  cart: PropTypes.array,
  goods: PropTypes.array,
  discardBuyGood: PropTypes.func
};

export default Cart;
