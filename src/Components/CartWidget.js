import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

const CartContainer = styled.div`
  padding: 0 2em;
  &:hover {
    cursor: pointer;
  }
`;
const CartWidget = () => {
  return (
    <CartContainer>
      <FiShoppingCart size={20} />
    </CartContainer>
  );
};

export default CartWidget;
