import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "firebase/auth";
import { getFirestore } from "../Firebase";
import { Card, Tabs, Tab, Button } from "@material-ui/core";
import styled from "styled-components";

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
  margin-bottom: 10px;
`;

const Auth = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [formType, setFormType] = useState("login");
  const createUser = (data) => {};

  const [value, setValue] = useState(0);

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
          <form onSubmit={handleSubmit(createUser())}>
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
            <input type="date" {...register("age", { required: true })} />
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
            <StyledRegisterButton variant="contained">
              Crear cuenta
            </StyledRegisterButton>
          </form>
        </RegisterForm>
      ) : (
        <LoginForm>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <p>¿Olvidaste tu contraseña?</p>
          <StyledLoginButton variant="contained">
            Iniciar Sesión
          </StyledLoginButton>
        </LoginForm>
      )}
    </Container>
  );
};

export default Auth;
