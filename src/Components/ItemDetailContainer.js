import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";
import { getFirestore } from "../Firebase";

const Loading = styled(LinearProgress)`
  width: 100vw;
  height: 4px;
  background-color: #000000;
`;

const ItemDetailContainer = (props) => {
  let { itemID } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const getItem = async () => {
      const firestore = getFirestore();
      const collection = await firestore.collection("products");
      const query = await collection.get();
      query.forEach((document) => {
        if (document.data().productId === itemID) {
          setItem(document.data());
          return;
        }
      });
    };
    getItem();
  }, [itemID]);

  return <>{item === undefined ? <Loading /> : <ItemDetail info={item} />}</>;
};

export default ItemDetailContainer;
