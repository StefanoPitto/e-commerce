import React from "react";
import styled from "styled-components";
import Item from "./Item";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ItemList = (props) => {
  return (
    <StyledContainer>
      {props.products.map((element) => {
        return <Item key={element.productId} itemInfo={element} />;
      })}
    </StyledContainer>
  );
};
export default ItemList;
