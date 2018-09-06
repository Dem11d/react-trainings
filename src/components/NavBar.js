import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { WithApplicationContext } from './ApplicationContext';

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
`;
export const Navigation = styled.div`
  min-width: 100px;
  background-color: #999;
  font-family: Arial, Helvetica, sans-serif;
  padding: 6px;
  margin: 3px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  
  a{
    text-decoration:none;
  }
`;

const NavBar = (props) => {
  const {state: {buyedGoods}} = props.context;
  return (
    <NavBarContainer>
      <Navigation>
        <Link to="/">All goods</Link>
      </Navigation>
      {buyedGoods.length > 0 ? (
        <Navigation>
          <Link to="/basket">Show basket</Link>
        </Navigation>) : null
      }

      {/* <Navigation>
        <Link to="/submit">Submit</Link>
      </Navigation> */}
    </NavBarContainer>
  );
};

export default WithApplicationContext(NavBar);
