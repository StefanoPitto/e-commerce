import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Card, Button } from "@material-ui/core";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Context from "./Context";

const StyledContainer = styled(Card)`
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 100px;
  padding: 15px 0;
`;

const ImageDiv = styled.div`
  img {
    width: 500px;
    height: 300px;
    object-fit: contain;
  }
  padding: 40px 10px;
`;

const InformationDiv = styled.div`
  text-align: center;
  min-width: 300px;
  h1 {
    font-size: 25px;
    margin-bottom: 30px;
  }
  :nth-child(2) {
    max-width: 120px;
  }

  Button {
    min-width: 200px;
    margin-top: 10px;
  }
`;

const StyledButton = styled(Button)`
  a {
    text-decoration: none;
    color: inherit;
  }
  color: #ffffff;
  background-color: #1ed760;
  &:hover {
    background-color: #12c450;
  }
`;

const ItemDetail = (props) => {
  const { addItem } = useContext(Context);
  const [counter, setCounter] = useState();
  const increase = () => {
    if (counter === undefined) setCounter(1);
    else if (counter < props.info.maxStock) {
      setCounter(counter + 1);
    }
  };
  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const addItemToCart = () => {
    if (counter > 0) {
      addItem({ ...props.info }, counter); //Envío toda la información del item y la cantidad que deseo agregar.
    }
  };
  return (
    <StyledContainer>
      <ImageDiv>
        <img src={props.info.productImage} alt="clothes" />
      </ImageDiv>
      <InformationDiv>
        <h1>{props.info.productName}</h1>
        <p>{props.info.productDescription}</p>
        <p>$ {props.info.productPrice}</p>
        <ItemCount onAdd={increase} onReduce={decrease} counter={counter} />
        <Button
          variant="contained"
          onClick={() => {
            addItemToCart();
          }}
        >
          Agregar al carrito
        </Button>
        <StyledButton variant="contained">
          <Link to="/cart">Ir al carrito</Link>
        </StyledButton>
      </InformationDiv>
    </StyledContainer>
  );
};

export default ItemDetail;
