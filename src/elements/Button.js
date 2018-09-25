import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #026937; /* Green */
  border: solid 1px transparent;
  border-radius: 10px;
  outline: none;
  color: white;
  font-weight: bold;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  font-size: 16px;
  flex:1;
  /* margin: 3px 5px; */
  }

  &:active{
    transform: translateY(1px);
    filter: saturate(150%);
  }
  &:hover{
    color: #026937;
    border-color: currentColor;
    background-color: white;
    
  }
`;

export default function Button (props) {
  return (
    <StyledButton {...props} >{props.children}</StyledButton>
  );
}
