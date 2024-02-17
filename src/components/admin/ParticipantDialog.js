import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import { API_URL } from "../../API";
import axios from "axios";
import { FaSpinner } from "react-icons/fa6";
import { Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import Moment from "react-moment";
import BaselineDataTable from "./tables/BaselineDataTable";
import InitialSurveryTable from "./tables/IntialSurveyTable";
import Papa from "papaparse";
import { SiMicrosoftexcel } from "react-icons/si";
import moment from "moment";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

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

export default function ParticipantDialog({ userEmail }) {
	const [open, setOpen] = React.useState(false);
	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	React.useEffect(() => {
		async function fetchdata() {
			try {
				const response = await axios.get(`${API_URL}/users/${userEmail}`);

				setData(response.data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.log(error);
				alert(`${error.message}`);
			}
		}
		fetchdata();
	}, [userEmail]);

	// Function to export data to CSV and trigger download
	const exportDataToCSV = (data) => {
		// console.log(data)
		// Convert the data to CSV format using PapaParse
		const csv = Papa.unparse(data);

		// Create a Blob containing the CSV data
		const csvBlob = new Blob([csv], { type: "text/csv" });

		// Create a URL for the Blob
		const csvUrl = URL.createObjectURL(csvBlob);

		// Create an invisible link element to trigger the download
		const link = document.createElement("a");
		link.href = csvUrl;
		link.download = "Intervention Participants.csv";

		link.click();

		// Clean up by revoking the URL to release resources
		URL.revokeObjectURL(csvUrl);
	};

	const newUserData = {
		Name: data.name,
		Email: data.email,
		Phone: data.phone,
		"Selection arm": data.selection,
		"Has done Baseline": data.isBaselineComplete === true ? "Yes" : "No",
		"Last logged at": moment(data.loggedin_at).format("D-MMMM-YYYY"),
	};

	const refineddata = data.userData?.filter((value) => value !== null);

	refineddata.forEach((obj, index) => {
		newUserData[`Question ${index + 1}`] = `Answer: ${obj.question}`;
	});

	console.log(newUserData);

	return (
		<React.Fragment>
			<button onClick={handleClickOpen} className="button-small">
				See Details
			</button>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				{loading ? (
					<div className="flex justify-center">
						<FaSpinner className="animate-spin text-5xl text-center text-websa-red" />
					</div>
				) : (
					<>
						<Box sx={{ position: "relative" }}>
							<Toolbar className="bg-websa-green flex justify-between text-white">
								<p className="text-2xl">{data.name}</p>
								<div className="flex">
									<button
										className="bg-white flex items-center text-websa-green text-base mr-5 px-2 py-1 rounded-sm font-websa-bold"
										onClick={() => exportDataToCSV([newUserData])}
									>
										<SiMicrosoftexcel className="mr-2" />
										Download Data
									</button>
									<IconButton
										edge="start"
										color="inherit"
										onClick={handleClose}
										aria-label="close"
									>
										<span className="text-sm">Close</span>
										<CloseIcon />
									</IconButton>
								</div>
							</Toolbar>
						</Box>
						<Box sx={{ width: "100%" }}>
							<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
								<Tabs
									value={value}
									onChange={handleChange}
									aria-label="basic tabs example"
								>
									<Tab label="Personal Information" {...a11yProps(0)} />
									<Tab label="Baseline Survey Data" {...a11yProps(1)} />
									<Tab label="Endline Survery Data" {...a11yProps(2)} />
									<Tab label="Intitial Survey Data" {...a11yProps(2)} />
								</Tabs>
							</Box>
							<CustomTabPanel value={value} index={0}>
								<ol className="space-y-4">
									<li>
										<strong>Full name: </strong>
										{data.name}
									</li>
									<li>
										<strong>Email address: </strong>
										{data.email}
									</li>
									<li>
										<strong>Phone: </strong>
										{data.phone}
									</li>
									<li>
										<strong>Is Baseline Completed: </strong>
										{data.isBaselineComplete === true
											? "Participant completed baseline survey"
											: "Participlant has not completed"}
									</li>
									<li>
										<strong>Last Logged in</strong>:{" "}
										<Moment fromNow>{data.loggedin_at}</Moment>
									</li>
								</ol>
							</CustomTabPanel>
							<CustomTabPanel value={value} index={1}>
								<BaselineDataTable userData={data.baselineData} />
							</CustomTabPanel>
							<CustomTabPanel value={value} index={2}>
								<InitialSurveryTable userData={data.userData} />
							</CustomTabPanel>
							<CustomTabPanel value={value} index={3}></CustomTabPanel>
						</Box>
					</>
				)}
			</Dialog>
		</React.Fragment>
	);
}
