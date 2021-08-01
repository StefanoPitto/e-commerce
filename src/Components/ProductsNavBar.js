import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
const StyledTab = styled(Tabs)`
  &:focus {
    background-color: red;
  }
  span {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ProductNavBar = (props) => {
  const { categoryID } = useParams();
  const mapNavBar = {
    todo: 0,
    remeras: 1,
    pantalones: 2,
    camperas: 3,
    calzado: 4,
    buzos: 5,
  };
  const [value, setValue] = useState(mapNavBar[categoryID]);

  const handleClick = (elem) => {
    setValue(elem);
  };

  return (
    <StyledTab value={value} indicatorColor="primary" textColor="primary">
      <Link to="/products/todo">
        <Tab label="Todo" onClick={() => handleClick(0, "todo")} />
      </Link>
      <Link to="/products/remeras">
        <Tab onClick={() => handleClick(1)} label="Remeras" />
      </Link>
      <Link to="/products/pantalones">
        <Tab onClick={() => handleClick(2)} label="Pantalones" />
      </Link>
      <Link to="/products/camperas">
        <Tab onClick={() => handleClick(3)} label="Camperas" />
      </Link>
      <Link to="/products/calzado">
        <Tab onClick={() => handleClick(4)} label="Calzado" />
      </Link>
      <Link to="/products/buzos">
        <Tab onClick={() => handleClick(5)} label="Buzos" />
      </Link>
    </StyledTab>
  );
};

export default ProductNavBar;
