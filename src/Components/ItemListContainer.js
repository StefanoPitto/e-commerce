import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import { LinearProgress } from "@material-ui/core";
import ProductNavBar from "./ProductsNavBar";
import { useParams } from "react-router-dom";
import { getFirestore } from "../Firebase";

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
    const getProducts = async () => {
      const firestore = getFirestore();
      const collection = await firestore.collection("products");
      const query = await collection.get();
      let newArray = [];
      query.forEach((document) => {
        console.log(document.data());
        if (
          categoryID === "todo" ||
          document.data().productType === categoryID
        ) {
          newArray.push(document.data());
        }
      });
      setProducts(newArray);
    };
    getProducts();
  }, [categoryID]);
  return (
    <>
      {products === undefined ? (
        <Loading color="secondary"></Loading>
      ) : (
        <ItemContainer>
          <StyledDiv>
            <ProductNavBar />
            <ItemList products={products}> </ItemList>
          </StyledDiv>
        </ItemContainer>
      )}
    </>
  );
};

export default ItemListContainer;
