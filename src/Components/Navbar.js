import React from "react";

import styled from "styled-components";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: solid 1px #00000085;

  a {
    text-decoration: none;
    color: black;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavBarItem = styled.div`
  text-align: center;
  color: black;
  font-size: 1.2em;
  padding: 0.4em 1.7em;
  height: 100%;
  min-width: 205px;
  &:hover {
    background-color: rgba(116, 127, 141, 0.08);
    cursor: pointer;
  }
`;

const StyledDiv = styled.div`
  align-self: center;
  margin-left: 2em;
  img {
    width: 64px;
    height: 64px;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledDiv>
        <img src="/NavBarLogo.png" alt="" />
      </StyledDiv>
      <ItemsContainer>
        <NavBarItem>
          <Link to="/">
            <p>Home</p>
          </Link>
        </NavBarItem>
        <NavBarItem>
          <Link to="/products">
            <p>Productos</p>
          </Link>
        </NavBarItem>
        <NavBarItem>
          <Link to="/about-us">
            <p>Sobre Nosotros</p>
          </Link>
        </NavBarItem>
        <CartWidget />
      </ItemsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
