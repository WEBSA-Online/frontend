import React from "react";
import axios from "axios";
import { API_URL } from "../../API";
import { useSelector } from "react-redux";

export default function Home() {
	const token = useSelector((state) => state.auth.accessToken);
	const [data, setData] = React.useState("");
	const userDetails = useSelector((state) => state.auth.userDetails);

	const fetchUserdata = async () => {
		try {
			const response = await axios.get(`${API_URL}/user/`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setData(response);
		} catch (err) {}
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<h2>Personal Information</h2>
			<p style={{}}>
				<strong>Name:</strong> {userDetails.name}
			</p>
			<p style={{}}>
				<strong>Phone:</strong> {userDetails.phone}
			</p>
			<p style={{}}>
				<strong>Email:</strong> {userDetails.email}
			</p>
			<p style={{}}>
				<strong>University:</strong> {userDetails.userData[5].answer}
			</p>
		</div>
	);
}
