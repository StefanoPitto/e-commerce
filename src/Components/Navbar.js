import React from "react";

import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: solid 1px #00000085;
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavBarItem = styled.div`
  text-align: center;
  color: black;
  font-size: 1.4em;
  padding: 1.2em 2em;
  &:hover {
    background-color: #d6d6d63b;
    cursor: pointer;
  }
`;

const StyledSpan = styled.span`
  align-self: center;
  margin-left: 2em;
`;

const CartIcon = styled.span`
  padding: 0 2em;
  &:hover {
    cursor: pointer;
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledSpan>My E-commerce</StyledSpan>
      <ItemsContainer>
        <NavBarItem>Home</NavBarItem>
        <NavBarItem>Productos</NavBarItem>
        <CartIcon>
          <FiShoppingCart size={20} />
        </CartIcon>
      </ItemsContainer>
    </NavbarContainer>
  );
};
