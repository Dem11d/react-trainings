import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4CAF50; /* Green */
  background-color: #026937; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  }

  &:active{
   background-color:#4CAF50;
  }
`;

export default function Button (props) {
  return (
    <StyledButton {...props} >{props.children}</StyledButton>
  );
}
