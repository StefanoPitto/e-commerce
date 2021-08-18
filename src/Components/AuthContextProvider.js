import React, { useState } from "react";
import { Provider } from "./AuthContext";
import { getAuth } from "../Firebase";

const AuthContextProvider = ({ children }) => {
	const [userStatus, setUserStatus] = useState(false);
	const [showError, setShowError] = useState(false);
	const [message, setMessage] = useState("");
	const firebase = getAuth();

	const createUser = async (data) => {
		try {
			await firebase.createUserWithEmailAndPassword(data.email, data.password);
			firebase.currentUser.updateProfile({
				displayName: `${data.name} ${data.surname}`,
			});
			console.log(firebase.currentUser);
		} catch (e) {
			setMessage(e.message);
			setShowError(true);
		}
		data = undefined;
	};

	const handleCloseError = () => {
		setShowError(false);
	};

	const logIn = async (data) => {
		console.log(data);
		try {
			await firebase.signInWithEmailAndPassword(data.email, data.password);
			console.log("se logeo");
			setUserStatus(true);
		} catch (e) {
			setMessage(e.message);
			setShowError(true);
		}
		data = undefined;
	};

	const logOut = async (data) => {
		try {
			await firebase.signOut();
			setUserStatus(false);
			console.log("Se cerró sesión.");
		} catch (e) {
			console.log("Error al desloguearse.");
			setMessage(e.message);
			setShowError(true);
		}
		data = undefined;
	};

	return (
		<Provider
			value={{
				createUser,
				logIn,
				logOut,
				userStatus,
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
