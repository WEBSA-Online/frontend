import axios from "axios";
import React from "react";
import { API_URL } from "../../API";
import AllUsersTable from "./tables/AllUsersTable";
import { FaSpinner } from "react-icons/fa6";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import PropTypes from "prop-types";

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

function ShowAllUsers() {
	const [data, setData] = React.useState([]);
	const [count, setCount] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [loadCount, setLoadCount] = React.useState(true);
	const [params, setParams] = React.useState("");
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

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

	console.log(count)

	return (
		<>
			{loading === true || loadCount === true ? (
				<div className="flex justify-center">
					<FaSpinner className="animate-spin text-5xl text-center text-websa-red" />
				</div>
			) : (
				<Box sx={{ width: "100%" }}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs
							value={value}
							onChange={handleChange}
							TabIndicatorProps={{
								sx: {
									backgroundColor: "#a70707", // Change this to your desired color
								},
							}}
						>
							<Tab
								style={{ color: "black", fontWeight: "bold" }}
								label="University Count"
								{...a11yProps(0)}
							/>
							<Tab
								style={{ color: "black", fontWeight: "bold" }}
								label="Participant details"
								{...a11yProps(1)}
							/>
						</Tabs>
					</Box>
					<CustomTabPanel value={value} index={0}>
						<div className="mb-8">
							<Grid container spacing={2}>
								{count
									.filter((value) => value._id !== "I stay home")
									.filter((value) => value._id !== "Kampala")
									.filter((value) => value._id !== "kamuli district ")
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
					</CustomTabPanel>
					<CustomTabPanel value={value} index={1}>
						<AllUsersTable
							count={count}
							userData={data}
							params={params}
							setParams={setParams}
							loading={loading}
							setLoading={setLoading}
						/>
					</CustomTabPanel>
				</Box>
			)}
		</>
	);
}

export default ShowAllUsers;
