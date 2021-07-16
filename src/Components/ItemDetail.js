import React from "react";
import styled from "styled-components";
import { Container, Button } from "@material-ui/core";
import ItemCount from "./ItemCount"

const StyledContainer = styled(Container)`
  max-width: 900px;
  border: 1px solid red;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:row;

`;

const ImageDiv= styled.div`
img{
  width: 100%;
}
`;

const ButtonsDiv= styled.div`
  min-width: 200px;
`;
const ItemDetail = (props) => {
  return (
    <StyledContainer>
      <ImageDiv>
       <img src={`${props.info.productImage}`} />
      </ImageDiv>      
      <ButtonsDiv>
      <ItemCount/>
      <Button variant="contained">Agregar al carrito</Button>
      </ButtonsDiv>    
    </StyledContainer>
  );
};

export default ItemDetail;
