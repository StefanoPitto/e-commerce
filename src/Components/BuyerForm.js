import React, { useState, useContext } from "react";
import Context from "./Context";
import { Card, Button } from "@material-ui/core";
import styled from "styled-components";
import { getFirestore } from "../Firebase";

const StyledCard = styled(Card)`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  padding: 50px;
`;

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapContainer = styled.div`
  border-right: 1px solid gray;
  padding: 0 80px;
`;

const FormContainer = styled.div`
  padding: 0 80px;
  text-align: center;
  font-weight: 700;
  margin-left: 20px;
  label,
  input {
    display: block;
    min-width: 200px;
    margin-bottom: 5px;
  }
  input {
    padding: 8px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 40px;
  font-weight: 700;
  background-color: #0aaf0ac9;
  &:hover {
    background-color: #06c906;
    color: white;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
`;

const BuyerForm = () => {
  const [verified, setVerified] = useState({
    name: false,
    email: false,
    tel: false,
    surname: false,
  });
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    tel: "",
    surname: "",
  });
  const { getTotalCost, getCartItems } = useContext(Context);

  const verifyName = (e) => {
    let regEx = /^[a-z ,.'-]+$/i;
    let currentState = verified;
    let currentInfo = customerInfo;
    currentState.name = regEx.test(e.target.value);
    currentInfo.name = e.target.value;
    setVerified(currentState);
    setCustomerInfo(currentInfo);
  };

  const verifyEmail = (e) => {
    let regEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    let currentState = verified;
    let currentInfo = customerInfo;
    currentState.email = regEx.test(e.target.value);
    currentInfo.email = e.target.value;
    setVerified(currentState);
    setCustomerInfo(currentInfo);
  };

  const verifyTel = (e) => {
    let regEx = /^[0-9]{7,9}$/;
    let currentState = verified;
    let currentInfo = customerInfo;
    currentState.tel = regEx.test(e.target.value);
    currentInfo.tel = e.target.value;
    setVerified(currentState);
    setCustomerInfo(currentInfo);
  };

  const verifySurname = (e) => {
    let regEx = /^[a-z ,.'-]+$/i;
    let currentState = verified;
    let currentInfo = customerInfo;
    currentState.surname = regEx.test(e.target.value);
    currentInfo.surname = e.target.value;
    setVerified(currentState);
    setCustomerInfo(currentInfo);
  };

  const crearOrden = () => {
    if (verified.name && verified.tel && verified.email && verified.surname) {
      let actualDate = new Date();
      let newOrder = {
        buyer: {
          name: `${customerInfo.name} ${customerInfo.surname}`,
          phone: customerInfo.tel,
          email: customerInfo.email,
        },
        items: getCartItems(),
        date: `${actualDate.getDate()}/${actualDate.getMonth()}/${actualDate.getFullYear()}`,
        totalCost: getTotalCost(),
      };
      const firestore = getFirestore();
      const collection = firestore.collection("orders");
      const query = collection.add(newOrder);
      query
        .then((resultado) => {
          console.log("Orden exitosa");
        })
        .catch((error) => {
          console.log("Error al crear la orden");
        });
    } else {
      console.log("No entro");
    }
  };

  return (
    <Container>
      <StyledCard>
        <MapContainer>
          {getCartItems().map((element) => {
            return (
              <ItemContainer key={element.item.productId}>
                <img src={element.item.productImage} alt="" />
                <p>{element.item.productName}</p>
              </ItemContainer>
            );
          })}
        </MapContainer>
        <FormContainer>
          <form action="">
            <label htmlFor="name">Nombre</label>
            <input
              onChange={verifyName}
              type="text"
              autoComplete="given-name"
              id="name"
            />
            <label htmlFor="surname">Apellido</label>
            <input
              onChange={verifySurname}
              type="text"
              autoComplete="family-name"
              id="surname"
            />
            <label htmlFor="cellphone">Celular</label>
            <input
              onChange={verifyTel}
              type="text"
              autoComplete="tel"
              id="cellphone"
            />
            <label htmlFor="email">E-mail</label>
            <input
              onChange={verifyEmail}
              type="text"
              autoComplete="email"
              id="email"
            />
          </form>
          <StyledButton onClick={crearOrden} variant="contained">
            Finalizar Compra
          </StyledButton>
        </FormContainer>
      </StyledCard>
    </Container>
  );
};

export default BuyerForm;
