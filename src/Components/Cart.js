import React, { useContext } from "react";
import Context from "./Context";
import styled from "styled-components";
import { Card, Button } from "@material-ui/core";
const StyledCard = styled(Card)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  text-align: center;
`;

const ProductContainer = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #d40b0b;
  color: white;
  font-weight: 700;
  width: 20px;
  height: 20px;
  &:hover {
    background-color: #ff0000;
  }
`;

const ClearCartButton = styled(Button)`
  margin-top: 20px;
`;

const Cart = () => {
  const { removeItem, clearCart, getCartItems } = useContext(Context);

  return (
    <>
      {getCartItems().length > 0 ? (
        <StyledCard>
          {getCartItems().map((product) => {
            return (
              <ProductContainer key={product.item.productId}>
                <img
                  src={product.item.productImage}
                  alt={product.item.productName}
                />
                <p>{product.item.productName}</p>
                <p>{product.quantity}</p>
                <p>${product.quantity * product.item.productPrice}</p>
                <RemoveButton
                  variant="contained"
                  onClick={() => {
                    removeItem(product.item.productId);
                  }}
                >
                  X
                </RemoveButton>
              </ProductContainer>
            );
          })}
          <ClearCartButton
            variant="contained"
            onClick={() => {
              clearCart();
            }}
          >
            Vaciar Carrito
          </ClearCartButton>
        </StyledCard>
      ) : (
        <h1>Aún no tenes productos en tu carrito.</h1>
      )}
    </>
  );
};

export default Cart;
