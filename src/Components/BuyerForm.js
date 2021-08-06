import React, { useState, useContext } from "react";
import Context from "./Context";
import { Card, Button, Backdrop } from "@material-ui/core";
import styled from "styled-components";
import { getFirestore } from "../Firebase";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { GoCheck } from "react-icons/go";
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

const StyledBackdrop = styled(Backdrop)`
  z-index: 1;
`;

const BackdropCard = styled(Card)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  min-width: 400px;
  background-color: #38d338;
  color: #ffffff;
  a {
    text-decoration: none;
    color: inherit;
  }
  Button {
    margin-top: 50px;
  }
`;

const BuyerForm = () => {
  const { register, handleSubmit } = useForm();
  const { getTotalCost, getCartItems, clearCart } = useContext(Context);
  const [open, setOpen] = useState(false);

  const createOrder = (data) => {
    let actualDate = new Date();
    let newOrder = {
      buyer: {
        name: `${data.name} ${data.surname}`,
        phone: data.tel,
        email: data.email,
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
        setOpen(true);
        clearCart();
      })
      .catch((error) => {
        console.log("Error al crear la orden");
      });
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
          <form onSubmit={handleSubmit(createOrder)}>
            <label htmlFor="name">Nombre</label>
            <input
              {...register("name", {
                required: true,
                pattern: /^[a-z ,.'-]+$/i,
              })}
              type="text"
              autoComplete="given-name"
              id="name"
            />
            <label htmlFor="surname">Apellido</label>
            <input
              {...register("surname", {
                required: true,
                pattern: /^[a-z ,.'-]+$/i,
              })}
              type="text"
              autoComplete="family-name"
              id="surname"
            />
            <label htmlFor="cellphone">Celular</label>
            <input
              {...register("tel", { required: true, pattern: /^[0-9]{7,9}$/ })}
              type="text"
              autoComplete="tel"
              id="cellphone"
            />
            <label htmlFor="email">E-mail</label>
            <input
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              type="text"
              autoComplete="email"
              id="email"
            />
            <StyledButton type="submit" variant="contained">
              Finalizar Compra
            </StyledButton>
          </form>
        </FormContainer>
      </StyledCard>
      <StyledBackdrop open={open}>
        <BackdropCard>
          <GoCheck size={60} />
          <Link to="/orders">
            <Button variant="contained">Mis ordenes</Button>
          </Link>
        </BackdropCard>
      </StyledBackdrop>
    </Container>
  );
};

export default BuyerForm;
