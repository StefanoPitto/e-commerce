import React from "react";
import styled from "styled-components";
import ItemCount from "./ItemCount";
import Button from "@material-ui/core/Button";

const ButtonContainer = styled.div`
  text-align: center;
`;

const ItemContainer = styled.div`
  max-width: fit-content;
  margin: 0 auto;
`;

const ItemListContainer = (props) => {
  return (
    <ItemContainer>
      <ItemCount></ItemCount>
      <ButtonContainer>
        <Button variant="contained">Agregar al carrito</Button>
      </ButtonContainer>
    </ItemContainer>
  );
};

export default ItemListContainer;
