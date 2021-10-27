import React, { useContext, useState } from "react";
import CartContext from "./CartContext";
import styled from "styled-components";
import { Card, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)`
	max-width: 1200px;
	min-width: 1000px;
	margin: 40px auto;
	padding: 10px 20px;
	text-align: center;
	a {
		text-decoration: none;
		color: inherit;
	}
`;

const ProductContainer = styled.div`
	border-bottom: 1px solid gray;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 20px 10px;
	img {
		width: 100px;
		height: 100px;
		object-fit: contain;
	}
	p {
		max-width: 100px;
		width: 100%;
	}
`;

const StyledAlert = styled.span`
	padding: 4px 8px;
	border-radius: 10px;
	color: white;
	font-size: 14px;
	margin-bottom: 0;
	background-color: #dc143c;
	position: absolute;
	bottom: 50px;
`;

const RemoveButton = styled(Button)`
	background-color: #d40b0b;
	color: white;
	font-weight: 700;
	&:hover {
		background-color: #ff0000;
	}
`;

const StyledButton = styled(Button)`
	margin-top: 20px;
	margin-left: 20px;
`;

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 20px;
	border-bottom: 1px solid gray;
`;

const EmptyCartStyledDiv = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	text-align: center;
	margin-top: 200px;
	a {
		text-decoration: none;
		color: inherit;
	}
`;

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Cart = () => {
	const { removeItem, clearCart, getCartItems, itemsQuantity, getTotalCost } =
		useContext(CartContext);

	const [clearCartAlert, setClearCartAlert] = useState(false);
	const [removeItemAlert, setRemoveItemAlert] = useState(false);
	const handleClearCart = () => {
		setClearCartAlert(true);
		setTimeout(() => {
			setClearCartAlert(false);
		}, 1800);
	};

	const handleRemoveItemAlert = () => {
		setRemoveItemAlert(true);
		setTimeout(() => {
			setRemoveItemAlert(false);
		}, 1800);
	};

	return (
		<StyledContainer>
			{getCartItems().length > 0 ? (
				<StyledCard>
					{getCartItems().map((product) => {
						return (
							<ProductContainer key={product.item.productId}>
								<img
									src={product.item.productImage}
									alt={product.item.productName}
								/>
								<p>{product.item.productName}</p>
								<p>Cantidad: {product.quantity}</p>
								<p>${product.quantity * product.item.productPrice}</p>
								<RemoveButton
									variant="contained"
									size="small"
									onClick={() => {
										handleRemoveItemAlert();
										removeItem(product.item.productId);
									}}
								>
									X
								</RemoveButton>
							</ProductContainer>
						);
					})}
					<StyledDiv>
						<p>Cantidad de productos: {itemsQuantity}</p>
						<p>Costo total: ${getTotalCost()}</p>
					</StyledDiv>
					<StyledButton
						variant="contained"
						color="primary"
						onClick={() => {
							clearCart();
							handleClearCart();
						}}
					>
						Vaciar Carrito
					</StyledButton>
					<Link to="/finalizar-compra">
						<StyledButton variant="contained">Finalizar Compra</StyledButton>
					</Link>
				</StyledCard>
			) : (
				<EmptyCartStyledDiv>
					<h1>Aún no tenes productos en tu carrito.</h1>
					<Link to="/">
						<Button variant="contained">Volver al inicio</Button>
					</Link>
					{clearCartAlert && (
						<StyledAlert>El carrito se vació correctamente!</StyledAlert>
					)}
				</EmptyCartStyledDiv>
			)}
			{removeItemAlert && (
				<StyledAlert>Se eliminó el producto correctamente!</StyledAlert>
			)}
		</StyledContainer>
	);
};

export default Cart;
