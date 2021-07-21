import React from "react";
import ItemCount from "./ItemCount";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

const ButtonContainer = styled.div`
	text-align: center;
`;

const StyledDiv = styled.div`
	text-align: center;
	max-width: 300px;
	img {
		width: 250px;
		height: 250px;
	}
	h1 {
		font-size: 20px;
	}
	p {
		font-size: 16px;
	}
	&:hover {
		cursor: pointer;
	}
`;

const StyledCard = styled(Card)`
	margin: 20px 20px;
	padding: 20px 40px;

	a {
		text-decoration: none;
		color: inherit;
	}
`;

const Item = (props) => {
	return (
		<StyledCard>
			<StyledDiv>
				<Link
					to={`/products/${props.itemInfo.productType}/item/${props.itemInfo.productId}`}
				>
					<h1>{props.itemInfo.productName}</h1>
					<img src={props.itemInfo.productImage} alt="" />
					<p>{`$ ${props.itemInfo.productPrice}`}</p>
				</Link>
			</StyledDiv>
			<ItemCount maxStock={props.itemInfo.maxStock}></ItemCount>
			<ButtonContainer>
				<Button variant="contained">Agregar al carrito</Button>
			</ButtonContainer>
		</StyledCard>
	);
};

export default Item;
