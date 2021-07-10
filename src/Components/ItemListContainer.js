import React from "react";
import styled from "styled-components";
import ItemList from "./ItemList";

const ItemContainer = styled.div`
  max-width: fit-content;
  margin: 0 auto;
`;

const Products = [
  {
    productId: 1,
    productName: "asd",
    productImage:
      "https://essential.vteximg.com.br/arquivos/ids/358254-1000-1000/306-6955_1.jpg",
    productPrice: 1400,
    productType: "asd",
  },
  {
    productId: 2,
    productName: "asd",
    productImage:
      "https://essential.vteximg.com.br/arquivos/ids/358254-1000-1000/306-6955_1.jpg",
    productPrice: 1900,
    productType: "asd",
  },
];

const ItemListContainer = (props) => {
  const getProducts = async () => {
    let productos = await fetch("../Products.json");
    let datos = await productos.json();
    console.log(datos);
    console.log("aca");
    return datos;
  };
  console.log(getProducts());

  return (
    <ItemContainer>
      <ItemList products={Products} />
    </ItemContainer>
  );
};

export default ItemListContainer;
