import React, { useState, useEffect } from "react";
import { getFirestore } from "../Firebase";
import { Card } from "@material-ui/core";
import styled from "styled-components";
//Por ahora este componente mostrará todas las ordenes en la base de datos, la idea sería en un próximo sprint agregar un login y poder consultar las ordenes asociadas ya sea a un mail o a una cuenta.

const StyledCard = styled(Card)`
	margin: 0 auto;
	margin: 20px;
	min-width: 600px;
	padding: 20px;
	h3 {
		border-bottom: 1px gray solid;
	}
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	div > p {
		align-self: flex-start;
	}
	div > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}
`;

const Container = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const Orders = () => {
	const [orders, setOrders] = useState();

	useEffect(() => {
		const getOrders = async () => {
			const firestore = getFirestore();
			const collection = await firestore.collection("orders");
			const query = await collection.get();
			let newArray = [];
			query.forEach((document) => {
				newArray.push({
					orderData: document.data(),
					id: document.id,
				});
			});
			setOrders(newArray);
		};
		getOrders();
	}, []);

	return (
		<Container>
			{orders ? (
				orders.map((order) => {
					console.log(order);
					return (
						<StyledCard>
							<h3>OrderID: {order.id}</h3>
							<div>
								<p>Comprador: {order.orderData.buyer.name}</p>
								<div>
									<p>Fecha: {order.orderData.date}</p>
									<p>Costo Total: {order.orderData.totalCost}</p>
								</div>
							</div>
						</StyledCard>
					);
				})
			) : (
				<></>
			)}
		</Container>
	);
};

export default Orders;
