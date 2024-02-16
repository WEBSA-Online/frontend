import axios from "axios";
import React from "react";
import { API_URL } from "../../API";
import AllUsersTable from "./tables/AllUsersTable";
import { FaSpinner } from "react-icons/fa6";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent, Typography } from "@mui/material";

function ShowAllUsers() {
	const [data, setData] = React.useState([]);
	const [count, setCount] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [loadCount, setLoadCount] = React.useState(true);
	const [params, setParams] = React.useState("");

	React.useEffect(() => {
		async function fetchdata() {
			try {
				const response = await axios.get(`${API_URL}/allusers?${params}`);
				setData(response.data.data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.log(error);
				alert(`${error.message}`);
			}
		}
		fetchdata();
	}, [data, params]);

	React.useEffect(() => {
		async function fetchdata() {
			try {
				const response = await axios.get(`${API_URL}/allusers`);
				setCount(response.data.count);
				setLoadCount(false);
			} catch (error) {
				setLoadCount(false);
				console.log(error);
				alert(`${error.message}`);
			}
		}
		fetchdata();
	}, []);

	return (
		<>
			<div className="mb-8">
				<Grid container spacing={2}>
					{count
						.filter((value) => {
							return value._id !== "I stay home";
						})
						.map((value, index) => {
							return (
								<Grid key={index} xs={12} md={3} className="mt-0">
									<Card>
										<div className="text-white bg-websa-green flex flex-col px-3 py-3">
											<span className="font-websa-regular text-sm">{value._id}</span>

											<span className="font-websa-bold mt-2 text-3xl text-yellow-200">
												{value.count}
											</span>
										</div>
									</Card>
								</Grid>
							);
						})}
				</Grid>
			</div>
			<div className="flex justify-center">
				{loading === true ? (
					<FaSpinner className="animate-spin text-5xl text-center text-websa-red" />
				) : (
					<AllUsersTable
						count={count}
						userData={data}
						params={params}
						setParams={setParams}
						loading={loading}
						setLoading={setLoading}
					/>
				)}
			</div>
		</>
	);
}

export default ShowAllUsers;
