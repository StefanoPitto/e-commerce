import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
	padding: 0;
	margin: 0;
	width: 99vw;
	height: calc(100vh - 79px);
	text-align: center;

	h1 {
		font-size: 52px;
		color: white;
		margin-bottom: 30px;
	}
	h2 {
		font-size: 40px;
		color: white;
		margin-top: 20px;
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

const Home = () => {
	return (
		<StyledDiv>
			<h1>Bienvenidos a Lyra Shop!</h1>
			<h2>Entrena con los mejores productos</h2>
		</StyledDiv>
	);
};

export default Home;
