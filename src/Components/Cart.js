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
  padding: 20px 10px;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    max-width: 100px;
    width: 100%;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #d40b0b;
  color: white;
  font-weight: 700;
  &:hover {
    background-color: #ff0000;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  margin-left: 20px;
`;

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid gray;
`;

const Cart = () => {
  const { removeItem, clearCart, getCartItems, itemsQuantity, getTotalCost } =
    useContext(Context);

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
                  size="small"
                  onClick={() => {
                    removeItem(product.item.productId);
                  }}
                >
                  X
                </RemoveButton>
              </ProductContainer>
            );
          })}
          <StyledDiv>
            <p>Cantidad de productos: {itemsQuantity}</p>
            <p>Costo total: ${getTotalCost()}</p>
          </StyledDiv>
          <StyledButton
            variant="contained"
            color="primary"
            onClick={() => {
              clearCart();
            }}
          >
            Vaciar Carrito
          </StyledButton>
          <StyledButton variant="contained">Finalizar Compra</StyledButton>
        </StyledCard>
      ) : (
        <StyledHeadline>Aún no tenes productos en tu carrito.</StyledHeadline>
      )}
    </>
  );
};

export default Cart;
