import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  text-align: center;
  max-width: 300px;
  img {
    width: 250px;
    height: 250px;
    object-fit: contain;
  }
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-height: 520px;
  height: 100%;
  max-width: 350px;
  margin: 20px 20px;
  padding: 20px 40px;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.75);
    transition: all 0.3s ease-out;
  }
`;

const Item = (props) => {
  return (
    <StyledCard>
      <StyledDiv>
        <Link
          to={`/products/${props.itemInfo.productType}/item/${props.itemInfo.productId}`}
        >
          <h1>{props.itemInfo.productName}</h1>
          <img src={props.itemInfo.productImage} alt="" />
          <p>{`$ ${props.itemInfo.productPrice}`}</p>
        </Link>
      </StyledDiv>
    </StyledCard>
  );
};

export default Item;
