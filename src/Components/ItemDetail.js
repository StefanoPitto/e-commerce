import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div``;

const ItemDetail = (props) => {
  return (
    <StyledDiv>
      <h1>{props.info.productId}</h1>
    </StyledDiv>
  );
};

export default ItemDetail;
