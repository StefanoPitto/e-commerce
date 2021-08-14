import React, { useState } from "react";
import { Provider } from "./AuthContext";
import { getAuth } from "../Firebase";

const AuthContextProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(false);
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState("");
  const firebase = getAuth();

  const createUser = async (data) => {
    try {
      await firebase.createUserWithEmailAndPassword(data.email, data.password);
      console.log("Cuenta creada");
    } catch (e) {
      console.log("Error al crear cuenta");
      setMessage(e.message);
      setShowError(true);
    }
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  const logIn = async (data) => {
    try {
      await firebase.signInWithEmailAndPassword(data.email, data.password);
      setUserLogged(true);
      console.log("Se inició sesión de manera correcta.");
    } catch (e) {
      console.log("Error al iniciar sesión.");
      setMessage(e.message);
      setShowError(true);
    }
  };

  const logOut = async () => {
    try {
      await firebase.signOut();
      setUserLogged(false);
      console.log("Se cerró sesión.");
    } catch (e) {
      console.log("Error al desloguearse.");
      setMessage(e.message);
      setShowError(true);
    }
  };

  return (
    <Provider
      value={{
        createUser,
        logIn,
        logOut,
        userLogged,
        showError,
        message,
        handleCloseError,
      }}
    >
      {children}
    </Provider>
  );
};

export default AuthContextProvider;
