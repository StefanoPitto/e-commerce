import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Card, Tabs, Tab, Button, Backdrop } from "@material-ui/core";
import styled from "styled-components";
import AuthContext from "./AuthContext";
import { IoClose } from "react-icons/io5";
const RegisterForm = styled.div`
  max-width: 354px;
  form {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      justify-content: space-around;
    }
    div > input {
      max-width: 150px;
    }
    input {
      margin: 4px;
      padding: 8px;
    }
  }
`;
const LoginForm = styled.div`
  input {
    min-width: 280px;
    padding: 8px;
    margin: 2px;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  p {
    margin-right: 20px;
    font-size: 12px;
    text-align: end;
  }
  p:hover {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
  }
`;
const Container = styled(Card)`
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  margin-top: 60px;
`;
const StyledTab = styled(Tabs)`
  &:focus {
    background-color: red;
  }
  span {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  margin-bottom: 20px;
`;

const StyledLoginButton = styled(Button)`
  margin-bottom: 10px;
`;

const StyledRegisterButton = styled(Button)`
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 160px;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: 2;
  div {
    padding: 80px 40px;
    position: relative;
  }
`;

const IconContainer = styled.span`
  position: absolute;
  top: 10%;
  right: 10%;
`;

const Auth = () => {
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState(0);
  const {
    logIn,
    createUser,
    userLogged,
    showError,
    message,
    handleCloseError,
  } = useContext(AuthContext);
  const handleClick = (elem) => {
    setValue(elem);
  };

  return (
    <Container>
      <StyledTab value={value} indicatorColor="primary" textColor="primary">
        <Tab label="Registrarse" onClick={() => handleClick(0)} />
        <Tab label="Iniciar Sesión" onClick={() => handleClick(1)} />
      </StyledTab>
      {value === 0 ? (
        <RegisterForm>
          <form onSubmit={handleSubmit(createUser)}>
            <div>
              <input
                type="name"
                placeholder="Nombre"
                {...register("name", { required: true })}
              />
              <input
                type="surname"
                placeholder="Apellido"
                {...register("name", { required: true })}
              />
            </div>
            <input
              type="date"
              placeholder="Fecha de nacimiento"
              {...register("age", { required: true })}
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
              })}
            />
            <StyledRegisterButton type="submit" variant="contained">
              Crear cuenta
            </StyledRegisterButton>
          </form>
        </RegisterForm>
      ) : (
        <LoginForm onSubmit={handleSubmit(logIn)}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <p>¿Olvidaste tu contraseña?</p>
          <StyledLoginButton type="submit" variant="contained">
            Iniciar Sesión
          </StyledLoginButton>
        </LoginForm>
      )}
      <StyledBackdrop open={showError}>
        <Card>
          <IconContainer>
            <IoClose
              size={30}
              onClick={() => {
                handleCloseError();
              }}
            />
          </IconContainer>
          <p>{message}</p>
        </Card>
      </StyledBackdrop>
    </Container>
  );
};

export default Auth;
