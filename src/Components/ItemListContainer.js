import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import { LinearProgress } from "@material-ui/core";
const ItemContainer = styled.div`
  max-width: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = styled(LinearProgress)`
  width: 2000px;
  height: 4px;
  background-color: black;
`;

const ItemListContainer = (props) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const getProducts = async () => {
      let productos = await fetch("/json/products.json");
      let datos = await productos.json();
      setProducts(datos);
    };
    setTimeout(() => getProducts(), 2000);
  }, []);

  return (
    <ItemContainer>
      {products === undefined ? (
        <Loading></Loading>
      ) : (
        <ItemList products={products}> </ItemList>
      )}
    </ItemContainer>
  );
};

export default ItemListContainer;
