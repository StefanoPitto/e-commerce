import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";

const ItemContainer = styled.div`
  max-width: fit-content;
  margin: 0 auto;
`;

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let productos = await fetch("./json/products.json");
      let datos = await productos.json();
      setProducts(datos);
    };
    getProducts();
  }, []);

  return (
    <ItemContainer>
      {products ? <ItemList products={products} /> : <div>Cargando...</div>}
    </ItemContainer>
  );
};

export default ItemListContainer;
