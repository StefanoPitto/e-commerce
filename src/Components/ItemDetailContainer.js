import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";
import { getFirestore } from "../Firebase";

const Loading = styled(LinearProgress)`
	width: 100vw;
	height: 4px;
	background-color: #000000;
`;

const StyledAlert = styled.span`
	padding: 4px 8px;
	border-radius: 10px;
	color: white;
	font-size: 14px;
	background-color: #1ed760;
	position: absolute;
	bottom: 50px;
`;

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const ItemDetailContainer = (props) => {
	let { itemID } = useParams();
	const [item, setItem] = useState();
	const [itemAdded, setItemAdded] = useState(false);

	const handleItemAdded = () => {
		setItemAdded(true);
		setTimeout(() => {
			setItemAdded(false);
		}, 1800);
	};

	useEffect(() => {
		const getItem = async () => {
			const firestore = getFirestore();
			const collection = await firestore.collection("products");
			const query = await collection.get();
			query.forEach((document) => {
				if (document.data().productId === itemID) {
					setItem(document.data());
					return;
				}
			});
		};
		getItem();
	}, [itemID]);

	return (
		<StyledContainer>
			{item === undefined ? (
				<Loading />
			) : (
				<ItemDetail handleAlert={handleItemAdded} info={item} />
			)}
			{itemAdded && (
				<StyledAlert>El producto se agregó al carrito!</StyledAlert>
			)}
		</StyledContainer>
	);
};

export default ItemDetailContainer;
