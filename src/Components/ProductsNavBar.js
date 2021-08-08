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
  margin-bottom: 20px;
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
      <Tab
        component={Link}
        to={"/products/todo"}
        label="Todo"
        onClick={() => handleClick(0, "todo")}
      />

      <Tab
        component={Link}
        to={"/products/remeras"}
        onClick={() => handleClick(1)}
        label="Remeras"
      />
      <Tab
        component={Link}
        to={"/products/pantalones"}
        onClick={() => handleClick(2)}
        label="Pantalones"
      />
      <Tab
        component={Link}
        to={"/products/camperas"}
        onClick={() => handleClick(3)}
        label="Camperas"
      />
      <Tab
        component={Link}
        to={"/products/calzado"}
        onClick={() => handleClick(4)}
        label="Calzado"
      />
      <Tab
        component={Link}
        to={"/products/buzos"}
        onClick={() => handleClick(5)}
        label="Buzos"
      />
    </StyledTab>
  );
};

export default ProductNavBar;
