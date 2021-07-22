import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import { LinearProgress } from "@material-ui/core";
import ProductNavBar from "./ProductsNavBar";
import { useParams } from "react-router-dom";

const ItemContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = styled(LinearProgress)`
  width: 100vw;
  height: 4px;
  background-color: #000000;
`;

const StyledDiv = styled.div``;

const ItemListContainer = (props) => {
  const { categoryID } = useParams();
  const [products, setProducts] = useState();
  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      let productos = await fetch("/json/products.json");
      let responseProducts = await productos.json();
      if (categoryID !== "todo") {
        let newArray = responseProducts.filter(
          (product) => product.productType === categoryID
        );
        setProducts(newArray);
      } else {
        setProducts(responseProducts);
      }
    };
    if (componentMounted) {
      getProducts();
    }
    return () => {
      componentMounted = false;
    };
  });

  return (
    <ItemContainer>
      {products === undefined ? (
        <Loading color="secondary"></Loading>
      ) : (
        <StyledDiv>
          <ProductNavBar />
          <ItemList products={products}> </ItemList>
        </StyledDiv>
      )}
    </ItemContainer>
  );
};

export default ItemListContainer;
