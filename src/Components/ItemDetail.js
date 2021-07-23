import React from "react";
import styled from "styled-components";
import { Card, Button } from "@material-ui/core";
import ItemCount from "./ItemCount";

const StyledContainer = styled(Card)`
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 100px;
`;

const ImageDiv = styled.div`
  img {
    width: 500px;
    height: 500px;
  }
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
`;

const ItemDetail = (props) => {
  return (
    <StyledContainer>
      <ImageDiv>
        <img src={props.info.productImage} alt="clothes" />
      </ImageDiv>
      <InformationDiv>
        <h1>{props.info.productName}</h1>
        <p>{props.info.productDescription}</p>
        <p>$ {props.info.productPrice}</p>
        <ItemCount maxStock={props.info.maxStock} />
        <Button variant="contained">Agregar al carrito</Button>
      </InformationDiv>
    </StyledContainer>
  );
};

export default ItemDetail;
