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
  const {showCartLink} = props;
  return (
    <NavBarContainer>
      <Navigation>
        <Link to="/">All goods</Link>
      </Navigation>
      {showCartLink && (
        <Navigation>
          <Link to="/basket">Show basket</Link>
        </Navigation>)}
    </NavBarContainer>
  );
};

NavBar.propTypes = {
  showCartLink: PropTypes.bool
};

export default NavBar;
