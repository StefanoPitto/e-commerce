import React, { useContext } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Context from "./Context";
const CartContainer = styled.div`
  padding: 0 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  span {
    font-size: 10px;
    top: -1px;
    position: relative;
    left: -15px;
  }
`;
const CartWidget = () => {
  const { itemsQuantity } = useContext(Context);
  return (
    <>
      {itemsQuantity > 0 ? (
        <Link to="/cart">
          <CartContainer>
            <FiShoppingCart size={25} />
            <span>{itemsQuantity}</span>
          </CartContainer>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartWidget;
