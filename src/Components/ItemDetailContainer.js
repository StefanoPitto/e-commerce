import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";

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
      let products = await fetch("/json/products.json");
      let data = await products.json();
      let found = false;
      for (let i = 0; i < data.length && !found; i++) {
        if (data[i].productId === itemID) {
          setItem(data[i]);
          found = true;
        }
      }
    };

    let timer = setTimeout(() => getItem(), 2000);
    return () => clearInterval(timer);
  }, [itemID]);

  return <>{item === undefined ? <Loading /> : <ItemDetail info={item} />}</>;
};

export default ItemDetailContainer;
