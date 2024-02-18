import axios from "axios";
import React from "react";
import { API_URL } from "../../API";
import InterventionTable from "./tables/InterventionTable";
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

function ShowAllSelected() {
	const [data, setData] = React.useState([]);
	const [count, setCount] = React.useState([]);
	const [selectionCount, setSelectionCount] = React.useState([]);
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
				const response = await axios.get(`${API_URL}/users?${params}`);
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
				const response = await axios.get(`${API_URL}/users`);
				setCount(response.data.count);
				setSelectionCount(response.data.selection);
				setLoadCount(false);
			} catch (error) {
				setLoadCount(false);
				console.log(error);
				alert(`${error.message}`);
			}
		}
		fetchdata();
	}, []);

	const selected = data.filter((value) => {
		return value._id !== null;
	});

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
									backgroundColor: "#a70707",
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
								label="Intervention Count"
								{...a11yProps(1)}
							/>
							<Tab
								style={{ color: "black", fontWeight: "bold" }}
								label="Participant details"
								{...a11yProps(2)}
							/>
						</Tabs>
					</Box>
					<CustomTabPanel value={value} index={0}>
						<div className="mb-8">
							<Grid container spacing={2}>
								{count
									.filter((value) => {
										return value._id !== null;
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
					</CustomTabPanel>
					<CustomTabPanel value={value} index={1}>
						<div className="mb-8">
							<Grid container spacing={2}>
								{selectionCount
									.filter((value) => {
										return value._id !== "n/a";
									})
									.map((value, index) => {
										return (
											<Grid key={index} xs={12} md={3} className="mt-0">
												<Card>
													<div className="text-white bg-websa-green flex flex-col px-3 py-3">
														<span className="font-websa-regular text-sm">
															{value._id.toUpperCase()}
														</span>

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
					<CustomTabPanel value={value} index={2}>
						<InterventionTable userData={selected} />
					</CustomTabPanel>
				</Box>
			)}
		</>
	);
}

export default ShowAllSelected;
