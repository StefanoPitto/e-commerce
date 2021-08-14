import React, { useContext } from "react";
import CartContext from "./CartContext";
import styled from "styled-components";
import { Card, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)`
  max-width: 1200px;
  margin: 40px auto;
  padding: 10px 20px;
  text-align: center;
  a {
    text-decoration: none;
    color: inherit;
  }
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
    object-fit: contain;
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

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid gray;
`;

const EmptyCartStyledDiv = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Cart = () => {
  const { removeItem, clearCart, getCartItems, itemsQuantity, getTotalCost } =
    useContext(CartContext);

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
                <p>Cantidad: {product.quantity}</p>
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
          <Link to="/finalizar-compra">
            <StyledButton variant="contained">Finalizar Compra</StyledButton>
          </Link>
        </StyledCard>
      ) : (
        <EmptyCartStyledDiv>
          <h1>Aún no tenes productos en tu carrito.</h1>
          <Link to="/home">
            <Button variant="contained">Volver al inicio</Button>
          </Link>
        </EmptyCartStyledDiv>
      )}
    </>
  );
};

export default Cart;
