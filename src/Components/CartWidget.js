import React, { useContext } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Context from "./Context";
const CartContainer = styled.div`
  padding: 0.55em 0.5em;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 14px;
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
