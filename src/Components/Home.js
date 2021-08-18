import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledDiv = styled.div`
	padding: 0;
	margin: 0;
	width: 99vw;
	height: 100vh;
	text-align: center;

	h1 {
		font-size: 52px;
		color: white;
		margin-bottom: 50px;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-image: url("https://i.imgur.com/lmgnydx.png");
	background-repeat: no-repeat;
	background-size: cover;
`;

const StyledSpan = styled.span`
	background-color: white;
	color: black;
	padding: 10px 50px;
	&:hover {
		background-color: black;
		color: white;
	}
`;
const Home = () => {
	return (
		<StyledDiv>
			<h1>Entrena con los mejores productos</h1>
			<Link to="/products/todo">
				<StyledSpan>Compra Acá!</StyledSpan>
			</Link>
		</StyledDiv>
	);
};

export default Home;
