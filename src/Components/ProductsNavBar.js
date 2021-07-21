import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

const ProductNavBar = (props) => {
	const [value, setValue] = useState(0);
	const handleClick = (elem) => {
		setValue(elem);
	};

	return (
		<StyledTab
			indicator={value ? true : true}
			value={value}
			variant="fullWidth"
			centered
			indicatorColor="primary"
		>
			<Link to="/products/todo">
				<Tab label="Todo" onClick={() => handleClick(0, "todo")} />
			</Link>
			<Link to="/products/remeras">
				<Tab onClick={() => handleClick(1)} label="Remeras" />
			</Link>
			<Link to="/products/pantalones">
				<Tab onClick={() => handleClick(2)} label="Pantalones" />
			</Link>
			<Link to="/products/trajes">
				<Tab onClick={() => handleClick(3)} label="Trajes" />
			</Link>
			<Link to="/products/calzado">
				<Tab onClick={() => handleClick(4)} label="Calzado" />
			</Link>
			<Link to="/products/buzos">
				<Tab onClick={() => handleClick(5)} label="Buzos" />
			</Link>
		</StyledTab>
	);
};

export default ProductNavBar;
