import React from "react";

import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";
import { CartWidget } from "./CartWidget";

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
  padding: 0.4em 1.8em;
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
        <NavBarItem>
          <p>Home</p>
        </NavBarItem>
        <NavBarItem>
          <p>Productos</p>
        </NavBarItem>
        <CartWidget />
      </ItemsContainer>
    </NavbarContainer>
  );
};
