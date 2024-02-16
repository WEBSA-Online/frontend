/* eslint-disable react/prop-types */
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Moment from "react-moment";
import moment from "moment";
import ParticipantDialog from "../ParticipantDialog";
import SelectFilter from "../ui/SelectFilter";
import { FaDownload } from "react-icons/fa6";
import Papa from "papaparse";


const headCells = [
	{
		id: "name",
		disablePadding: true,
		label: "Name",
	},
	{
		id: "university",
		numeric: true,
		disablePadding: false,
		label: "University",
	},
	{
		id: "created",
		numeric: true,
		disablePadding: false,
		label: "Date Of Participation",
	},
	{
		id: "loggedin",
		numeric: true,
		disablePadding: false,
		label: "Last Logged in",
	},
	{
		id: "details",
		numeric: true,
		disablePadding: false,
		label: "",
	},
];

function EnhancedTableHead() {
	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align="left"
						padding={headCell.disablePadding ? "none" : "normal"}
					>
						<span className="font-websa-bold text-base">{headCell.label}</span>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(["asc", "desc"]).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
};

function TableToolbar({ setBaseline, setArm, downloadFn, refinedata}) {
	const options = [
		{ value: "Completed Baseline", bool: "true" },
		{ value: "Didn't Complete Baseline", bool: "false" },
	];
	const armOptions = [
		{ value: "Intervention arm", bool: "intervention" },
		{ value: "Control Arm", bool: "control" },
	];
	return (
		<Box className="pt-6 pb-4 flex justify-between">
			<Typography variant="h6">
				<span className="font-websa-bold">Participant Details</span>
			</Typography>
			<div className="flex items-center space-x-5">
				<div>
					<span className="text-base">Sort By Arm:</span>
					<SelectFilter setMethod={setArm} options={armOptions} />
				</div>
				<div>
					<span className="text-base">Baseline Status:</span>
					<SelectFilter setMethod={setBaseline} options={options} />
				</div>
				<div>
					<button
						onClick={() => downloadFn(refinedata)}
						className="button-small-green flex items-space space-y-2"
					>
						<FaDownload className="mr-2" />
						Download Data
					</button>
				</div>
			</div>
		</Box>
	);
}

export default function InterventionTable({ userData }) {
	const [order, setOrder] = React.useState("asc");
	const [orderBy, setOrderBy] = React.useState("calories");
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [isBaselineComplete, setBaseline] = React.useState(false);
	const [arm, setArm] = React.useState("");

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// Sort dates
	function compareISODate(a, b) {
		const dateA = new Date(a.created_at);
		const dateB = new Date(b.created_at);

		if (dateA > dateB) return -1;
		if (dateA < dateB) return 1;
		return 0;
	}

	function sortReferrals(a, b) {
		if (a.created_at > b.created_at) {
			return -1;
		} else {
			return 1;
		}
	}

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userData.length) : 0;

	
	const refineddata = userData
		.filter((value) => {
			if (arm === "intervention") {
				return value.selection === "intervention";
			} else if (arm === "control") {
				return value.selection === "control";
			} else {
				return value;
			}
		})
		.filter((value) => {
			if (isBaselineComplete === "false") {
				return value.isBaselineComplete === false;
			} else if (isBaselineComplete === "true") {
				return value.isBaselineComplete === true;
			} else {
				return value;
			}
		})
		.map((value) => {
			return {
				Name: value.name,
				Email: value.email,
				Phone: value.phone,
				"Selection arm": value.selection,
				University: value.university,
				"Has done Baseline": value.isBaselineComplete === true ? "Yes" : "No",
				"Last logged at": moment(value.loggedin_at).format("D-MMMM-YYYY"),
			};
		});


	// Function to export data to CSV and trigger download
	const exportDataToCSV = (data) => {
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

	return (
		<Box sx={{ width: "100%" }}>
			<div className="container">
				<button onClick={() => exportDataToCSV(refineddata)}>Export to CSV</button>
			</div>

			<Paper sx={{ width: "100%", mb: 2 }} className="px-5">
				<TableToolbar
					setBaseline={setBaseline}
					setArm={setArm}
					downloadFn={exportDataToCSV}
					refinedata={refineddata}
				/>
				<TableContainer>
					<Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={userData.length}
						/>
						<TableBody>
							{userData
								.filter((value) => {
									if (arm === "intervention") {
										return value.selection === "intervention";
									} else if (arm === "control") {
										return value.selection === "control";
									} else {
										return value;
									}
								})
								.filter((value) => {
									if (isBaselineComplete === "false") {
										return value.isBaselineComplete === false;
									} else if (isBaselineComplete === "true") {
										return value.isBaselineComplete === true;
									} else {
										return value;
									}
								})
								.sort(sortReferrals)
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									const labelId = `enhanced-table-checkbox-${index}`;
									return (
										<TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
											<TableCell component="th" id={labelId} scope="row" padding="none">
												{row.name}
											</TableCell>
											<TableCell align="left">{row.university}</TableCell>
											<TableCell align="left">
												{" "}
												<Moment fromNow>{row.created_at}</Moment>
											</TableCell>
											<TableCell align="left">
												{" "}
												<Moment fromNow>{row.loggedin_at}</Moment>
											</TableCell>
											<TableCell align="left">
												<ParticipantDialog userEmail={row.email} />
											</TableCell>
										</TableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25, 50, 100]}
					component="div"
					count={userData.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</Box>
	);
}
