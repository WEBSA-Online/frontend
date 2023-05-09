import React from "react";
import axios from "axios";
import { API_URL } from "../../API";
import { useSelector } from "react-redux";
import {Stack} from "@mui/material"

export default function Home() {
	const token = useSelector((state) => state.auth.accessToken);
	const [data, setData] = React.useState("");
	const userDetails = useSelector((state) => state.auth.userDetails);

	console.log(userDetails);

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
			<div className="mt-6 divide-y">
				<div className="bg-slate-200 p-6 rounded-t-lg">
					<p className="font-websa-bold text-xl">Personal Information.</p>
				</div>
				<Stack spacing={2} className="bg-white p-6">
					<p>
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
				</Stack>
			</div>
	);
}
