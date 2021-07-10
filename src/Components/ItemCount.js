import React, { useState } from "react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import styled from "styled-components";

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledP = styled.p`
  min-width: 120px;
  text-align: center;
`;

const ItemCount = (props) => {
  const stock = parseInt(props.maxStock);
  const [counter, setCounter] = useState(1);
  const increase = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <CounterContainer>
      <span>
        <HiMinusSm size={30} onClick={() => decrease()} />
      </span>
      <span>
        <StyledP>{counter}</StyledP>
      </span>
      <span>
        <HiPlusSm size={30} onClick={() => increase()} />
      </span>
    </CounterContainer>
  );
};

export default ItemCount;
