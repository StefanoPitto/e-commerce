import React from "react";

import styled from "styled-components";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  svg {
    width: 64px;
    margin-left: 30px;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledDiv>
        <svg viewBox="0 0 200 102.4787141364906">
          <defs id="SvgjsDefs1557"></defs>
          <g
            transform="matrix(5.632555389763383,0,0,5.632555389763383,-9.845706966340225,-27.61078624129569)"
            fill="#111111"
          >
            <path d="M1.748 4.901999999999999 l1.4551 0 l0 13.086 l5.5664 0 l0 1.3965 l-7.0215 0 l0 -14.482 z M8.574219375 8.477 l1.4551 0 l3.6816 8.252 l3.5742 -8.252 l1.4746 0 l-6.3965 14.619 l-1.4551 0 l2.0605 -4.7168 z M20.000040625 14.541 l0 -1.2891 q0.15625 -0.966796875 0.44921875 -1.572265625 q0.68359375 -1.6796875 1.8359375 -2.4609375 t1.9141 -0.78125 q0.56640625 0 1.2109375 0.37109375 l-0.71289 1.1523 q-0.908203125 -0.33203125 -1.801757813 0.537109375 t-1.2354 1.8945 q-0.25390625 0.908203125 -0.25390625 3.408203125 l0 3.623 l-1.4063 0 l0 -4.8828 z M31.640628125 8.203 q2.470703125 0 4.1015625 1.787109375 q1.50390625 1.630859375 1.50390625 3.876953125 q0.01953125 5.546875 0 5.634765625 l-1.4551 0 l0 -2.4316 q-1.142578125 2.12890625 -4.150390625 2.3828125 q-2.4609375 0 -4.018554688 -1.674804688 t-1.5576 -3.9111 q0 -2.2265625 1.474609375 -3.8671875 q1.630859375 -1.796875 4.1015625 -1.796875 z M31.640628125 9.551 q-1.708984375 0 -2.939453125 1.26953125 t-1.2305 3.0664 q0 1.162109375 0.6298828125 2.236328125 t2.1338 1.8164 q3.76953125 0.83984375 5.361328125 -3.427734375 q0.087890625 -1.3671875 -0.29296875 -2.6171875 q-0.2734375 -0.56640625 -0.751953125 -1.07421875 q-1.201171875 -1.26953125 -2.91015625 -1.26953125 z"></path>
          </g>
        </svg>
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
