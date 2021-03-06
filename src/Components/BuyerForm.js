import React, { useState, useContext } from "react";
import CartContext from "./CartContext";
import { Card, Button, Backdrop } from "@material-ui/core";
import styled from "styled-components";
import { getFirestore } from "../Firebase";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { GoCheck } from "react-icons/go";
import { RiErrorWarningLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";

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

const MapContainer = styled.div``;

const FormContainer = styled.div`
	padding: 0 80px;
	text-align: center;
	font-weight: 700;
	margin-left: 20px;

	input {
		display: block;
		min-width: 200px;
		margin-bottom: 20px;
		padding: 8px;
		border: #adababc8 1px solid;
	}
`;

const StyledButton = styled(Button)`
	margin-top: 20px;
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
	text-align: center;
	img {
		width: 50px;
		height: 50px;
		object-fit: contain;
		margin-right: 20px;
	}
	p {
		min-width: 50px;
		margin-right: 20px;
	}
`;

const StyledBackdrop = styled(Backdrop)`
	z-index: 1;
`;

const SuccessBackdropCard = styled(Card)`
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

const DeniedBackdropCard = styled(Card)`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	min-height: 400px;
	min-width: 400px;
	background-color: #b52e2e;
	color: #ffffff;
	a {
		text-decoration: none;
		color: inherit;
	}
	Button {
		margin-top: 50px;
	}
`;

const StyledError = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		margin-left: 6px;
	}
	color: black;
`;

const StyledDiv = styled.div`
	border-right: 1px solid gray;
	text-align: end;
	padding: 0 80px;
	display: flex;
	flex-direction: column;
	p {
		align-self: flex-end;
		flex-basis: 1;
	}
`;

const BuyerForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const { getTotalCost, getCartItems, clearCart } = useContext(CartContext);
	const [success, setSuccess] = useState(false);
	const [denied, setDenied] = useState(false);

	const createOrder = (data) => {
		let actualDate = new Date();
		let newOrder = {
			buyer: {
				name: `${data.name} ${data.surname}`,
				phone: data.tel,
				email: data.email,
			},
			items: getCartItems(),
			date: `${actualDate.getDate()}/${
				actualDate.getMonth() + 1
			}/${actualDate.getFullYear()}`,
			totalCost: getTotalCost(),
		};
		const firestore = getFirestore();
		const collection = firestore.collection("orders");
		const query = collection.add(newOrder);
		query
			.then((resultado) => {
				setSuccess(true);
				clearCart();
			})
			.catch((error) => {
				setDenied(true);
			});
	};

	return (
		<Container>
			<StyledCard>
				<StyledDiv>
					<MapContainer>
						{getCartItems().map((element) => {
							return (
								<ItemContainer key={element.item.productId}>
									<img src={element.item.productImage} alt="" />
									<p>{element.item.productName}</p>
									<p>Cantidad: {element.quantity}</p>
									<p>$ {element.item.productPrice * element.quantity}</p>
								</ItemContainer>
							);
						})}
					</MapContainer>
					<p>Costo Total: {getTotalCost()}</p>
				</StyledDiv>
				<FormContainer>
					<form onSubmit={handleSubmit(createOrder)}>
						<input
							{...register("name", {
								required: true,
								pattern: /^[a-z ,.'-]+$/i,
							})}
							type="text"
							autoComplete="given-name"
							placeholder="Nombre"
						/>
						<input
							{...register("surname", {
								required: true,
								pattern: /^[a-z ,.'-]+$/i,
							})}
							type="text"
							autoComplete="family-name"
							placeholder="Apellido"
						/>
						<input
							{...register("tel", {
								required: true,
								pattern: /^[0-9]{10,13}$/,
							})}
							type="text"
							autoComplete="tel"
							placeholder="Celular"
						/>
						<input
							{...register("email", {
								required: true,
								pattern:
									/^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
							})}
							type="text"
							autoComplete="email"
							placeholder="E-mail"
						/>
						{(errors.name?.type === "required" ||
							errors.name?.type === "pattern" ||
							errors.surname?.type === "required" ||
							errors.surname?.type === "pattern" ||
							errors.tel?.type === "required" ||
							errors.tel?.type === "pattern" ||
							errors.email?.type === "required" ||
							errors.email?.type === "pattern") && (
							<StyledError>
								<RiErrorWarningLine size={20} />
								<p>Verifique todos los campos</p>
							</StyledError>
						)}
						<StyledButton type="submit" variant="contained">
							Generar Orden
						</StyledButton>
					</form>
				</FormContainer>
			</StyledCard>
			<StyledBackdrop open={success}>
				<SuccessBackdropCard>
					<GoCheck size={60} />
					<Link to="/orders">
						<Button variant="contained">Mis ordenes</Button>
					</Link>
				</SuccessBackdropCard>
			</StyledBackdrop>
			<StyledBackdrop open={denied}>
				<DeniedBackdropCard>
					<ImCross size={60} />
					<Button
						variant="contained"
						onClick={() => {
							setDenied(false);
						}}
					>
						Reintentar
					</Button>
				</DeniedBackdropCard>
			</StyledBackdrop>
		</Container>
	);
};

export default BuyerForm;
