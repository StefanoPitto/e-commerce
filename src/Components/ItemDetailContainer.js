import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";

const Loading = styled(LinearProgress)`
  width: 2000px;
  height: 4px;
  background-color: black;
`;

const ItemDetailContainer = (props) => {
  let { itemID } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const getItem = async () => {
      let products = await fetch("/json/products.json");
      let datos = await products.json();
      let encontre = false;
      console.log(datos);
      for (let i = 0; i < datos.length && !encontre; i++) {
        if (datos[i].productId === itemID) {
          setItem(datos[i]);
          encontre = true;
        }
      }
    };
    const nashe = setTimeout(() => getItem(), 2000);
    return () => clearTimeout(nashe);
  }, [itemID]);

  return <>{item === undefined ? <Loading /> : <ItemDetail info={item} />}</>;
};

export default ItemDetailContainer;
