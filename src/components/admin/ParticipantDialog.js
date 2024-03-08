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
import moment from "moment";
import { FaRegSadTear } from "react-icons/fa";

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

	const newUserData = {
		Name: data.name,
		Email: data.email,
		Phone: data.phone,
		"Selection arm": data.selection,
		"Has done Baseline": data.isBaselineComplete === true ? "Yes" : "No",
		"Last logged at": moment(data.loggedin_at).format("D-MMMM-YYYY"),
	};

	const newUserBaselineData = {
		Name: data.name,
		Email: data.email,
		Phone: data.phone,
		"Selection arm": data.selection,
		"Has done Baseline": data.isBaselineComplete === true ? "Yes" : "No",
		"Last logged at": moment(data.loggedin_at).format("D-MMMM-YYYY"),
	};

	const getScores = (data) =>{
		const filtered = data?.filter((value) => value.score !== undefined);
		return filtered?.reduce(
			(accumulator, currentValue) => accumulator + currentValue.score, 0
		);
	}

	const refineddata = data.userData?.filter((value) => value !== null);
	const refinedBaseline = data.baselineData?.filter((value) => value !== null);


	refineddata?.forEach((obj, index) => {
		newUserData[`Question ${index + 1}: ${obj.answer}`] = `Answer: ${obj.answer}`;
	});

	refinedBaseline?.forEach((obj, index) => {
		newUserBaselineData[
			`Question ${index + 1}:  ${obj.answer}`
		] = `Answer: ${obj.answer}`;
	});

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
									TabIndicatorProps={{
										sx: {
											backgroundColor: "#a70707", // Change this to your desired color
										},
									}}
								>
									<Tab style={{ color: "black", fontWeight: "bold" }} label="Personal Information" {...a11yProps(0)} />
									<Tab style={{ color: "black", fontWeight: "bold" }} label="Intitial Survey Data" {...a11yProps(1)} />
									<Tab style={{ color: "black", fontWeight: "bold" }} label="Baseline Survey Data" {...a11yProps(2)} />
									<Tab style={{ color: "black", fontWeight: "bold" }} label="Endline Survery Data" {...a11yProps(2)} />
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
							<CustomTabPanel value={value} index={1} className="bg-slate-200 px-16">
								<InitialSurveryTable
									userData={data.userData}
									newUserData={newUserData}
									scores={getScores(refineddata)}
									name={data.name}
								/>
							</CustomTabPanel>
							<CustomTabPanel
								value={value}
								index={2}
								className={`bg-slate-200 px-16 ${
									data?.isBaselineComplete === false ? "h-screen" : null
								}`}
							>
								{data?.isBaselineComplete ? (
									<BaselineDataTable
										userData={data.baselineData}
										name={data.name}
										newUserBaselineData={newUserBaselineData}
									/>
								) : (
									<div className="p-4 bg-white font-websa-bold flex flex-col items-center mx-auto">
										<FaRegSadTear className="text-6xl text-red-700" />
										<p className="mt-3 text-lg">Participant Has Not Done Baseline</p>
									</div>
								)}
							</CustomTabPanel>
							<CustomTabPanel
								value={value}
								index={3}
								className="bg-slate-200 h-screen px-16"
							>
								<div className="p-4 bg-white font-websa-bold flex flex-col items-center mx-auto">
									<FaRegSadTear className="text-6xl text-red-700" />
									<p className="mt-3 text-lg">Participant Has Not Done Endline</p>
								</div>
							</CustomTabPanel>
						</Box>
					</>
				)}
			</Dialog>
		</React.Fragment>
	);
}
