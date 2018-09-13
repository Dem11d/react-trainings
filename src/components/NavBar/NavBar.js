import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Navigation} from '../../elements/Navigation';

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
`;

const NavBar = (props) => {
  const {cart} = props;
  return (
    <NavBarContainer>
      <Navigation>
        <Link to="/">All goods</Link>
      </Navigation>
      {cart.length > 0 && (
        <Navigation>
          <Link to="/basket">Show basket</Link>
        </Navigation>)}
    </NavBarContainer>
  );
};

NavBar.propTypes = {
  cart: PropTypes.array
};

export default NavBar;
