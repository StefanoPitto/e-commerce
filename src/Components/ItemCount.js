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

const ItemCount = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    if (counter > 0) {
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
