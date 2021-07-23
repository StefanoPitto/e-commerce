import React from "react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import styled from "styled-components";

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span > svg :hover {
    cursor: pointer;
  }
`;

const StyledP = styled.p`
  min-width: 120px;
  text-align: center;
`;

const ItemCount = (props) => {
  return (
    <CounterContainer>
      <span>
        <HiMinusSm size={30} onClick={() => props.onReduce()} />
      </span>
      <span>
        <StyledP>{props.counter}</StyledP>
      </span>
      <span>
        <HiPlusSm size={30} onClick={() => props.onAdd()} />
      </span>
    </CounterContainer>
  );
};

export default ItemCount;
