import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import styled from "styled-components";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineUpload } from "react-icons/ai";

const Container = styled.section`
	padding: 50px;
	text-align: center;
`;

const IconContainer = styled.span`
	position: absolute;
	font-size: 48px;
	a {
		text-decoration: none;
		color: inherit;
	}
	top: 40px;
	left: 50px;
`;

const ImageContainer = styled.div`
	margin-top: 100px;
	position: relative;
	img {
		position: absolute;
		z-index: 0;
		width: 200px;
		height: 200px;
		object-fit: cover;
	}
	label {
		position: absolute;
		z-index: 1;
		width: 200px;
		height: 200px;
		top: 80px;
		opacity: 0;
		color: gray;
		transform: translate(50, 50);
	}
	&:hover > label {
		transition: ease-in-out 0.5s;
		opacity: 1;
		cursor: pointer;
	}
`;

const InfoContainer = styled.div``;

const ProfileContainer = styled.div``;

const CustomInput = styled.input`
	display: none;
`;
const UserProfile = () => {
	const { user } = useContext(AuthContext);
	console.log(user);

	const setImage = (e) => {
		console.log("imagen", e.target.value);
	};

	return (
		<Container>
			<IconContainer>
				<Link to="/">
					<IoHome />
				</Link>
			</IconContainer>
			<ProfileContainer>
				<ImageContainer>
					<img
						src={
							user.photoUrl
								? user.photoUrl
								: "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png"
						}
						alt=""
					/>
					<CustomInput
						id="file"
						accept="image/*"
						type="file"
						onChange={setImage}
					/>
					<label for="file">
						<AiOutlineUpload size={40} />
					</label>
				</ImageContainer>
				<InfoContainer>
					<h4>{user.displayName}</h4>
				</InfoContainer>
			</ProfileContainer>
		</Container>
	);
};

export default UserProfile;
