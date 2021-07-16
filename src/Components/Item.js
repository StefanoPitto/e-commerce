import React from "react";
import ItemCount from "./ItemCount";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

const ButtonContainer = styled.div`
  text-align: center;
`;

const StyledDiv = styled.div`
  text-align: center;
  max-width: 300px;
  img {
    width: 250px;
    height: 250px;
  }
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
  }
`;

const StyledCard = styled(Card)`
  margin: 20px 20px;
  padding: 20px 40px;

  &:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Item = (props) => {
  return (
    <StyledCard>
      <Link to={`/products/${props.itemInfo.productId}`}>
        <StyledDiv>
          <h1>{props.itemInfo.productName}</h1>
          <img src={props.itemInfo.productImage} alt="" />
          <p>{`$ ${props.itemInfo.productPrice}`}</p>
        </StyledDiv>
        <ItemCount maxStock="5"></ItemCount>
        <ButtonContainer>
          <Button variant="contained">Agregar al carrito</Button>
        </ButtonContainer>
      </Link>
    </StyledCard>
  );
};

export default Item;
