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

function TableToolbar({
	setBaseline,
	setArm,
	downloadFn,
	refinedata,
	setUniversity,
}) {
	const options = [
		{ value: "Completed Baseline", bool: "true" },
		{ value: "Didn't Complete Baseline", bool: "false" },
	];
	const armOptions = [
		{ value: "Intervention arm", bool: "intervention" },
		{ value: "Control Arm", bool: "control" },
	];
	const universities = [
		{ value: "Makerere Univeristy", bool: "muk" },
		{ value: "MUBS", bool: "mubs" },
		{ value: "Kyambogo University", bool: "kyu" },
		{ value: "Uganda Christian University", bool: "ucu" },
		{ value: "Uganda Martyrs University Nkozi", bool: "umun" },
		{ value: "Ndejje University", bool: "nu" },
		{ value: "Kampala Internatonal University", bool: "kiu" },
	];
	return (
		<Box className="pt-6 pb-4 flex justify-between">
			<div className="flex items-center space-x-3">
				<div>
					<span className="text-sm">Sort by Arm:</span>
					<SelectFilter setMethod={setArm} options={armOptions} />
				</div>
				<div>
					<span className="text-sm">Sort by Baseline Status:</span>
					<SelectFilter setMethod={setBaseline} options={options} />
				</div>
				<div>
					<span className="text-sm">Sort by Univeristy:</span>
					<SelectFilter setMethod={setUniversity} options={universities} />
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
	const [university, setUniversity] = React.useState("");

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
	
	const refinedBaseline = userData?.filter((value, index) => value.baselineData[index] !== undefined);

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
		.filter((value) => {
			if (university === "muk") return value.university === "Makerere University";
			if (university === "mubs")
				return value.university === "Makerere University Business School";
			if (university === "ucu")
				return value.university === "Uganda Christian University";
			if (university === "kiu")
				return value.university === "Kampala International University";
			if (university === "kyu") return value.university === "Kyambogo University";
			if (university === "umun")
				return value.university === "Uganda Martyrs University Nkozi";
			if (university === "nu") return value.university === "Ndejje University";
			return value;
		})
		.map((value, index) => {
			const refinedBaseline = value.baselineData.filter((elem) => elem !== null);
			const newdata = {
				Name: value.name,
				Email: value.email,
				Phone: value.phone,
				"Selection arm": value.selection,
				University: value.university,
				"Has done Baseline": value.isBaselineComplete === true ? "Yes" : "No",
				"Last logged at": moment(value.loggedin_at).format("D-MMMM-YYYY"),
			};
			refinedBaseline?.forEach((obj, index) => {
				if(index >= 11 && index <= 14){
					if(index === 13){
						newdata[
							`Question ${index + 1}: ${obj[0].question},`
						] = `Answer: ${obj[0].answer}`;
					} else {
						newdata[
							`Question ${index + 1}: ${obj[0].question}`
						] = `Answer: ${obj[0].answer}`;
					}					
				} else {
					newdata[
						`Question ${index + 1}: ${obj.question}`
					] = `Answer: ${obj.answer}`;
				}				
			});
			return newdata
		});	

	console.log("checking baseline", refineddata);

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

	return (
		<Box sx={{ width: "100%" }}>
			<Paper sx={{ width: "100%", mb: 2 }} className="px-5">
				<TableToolbar
					setBaseline={setBaseline}
					setArm={setArm}
					downloadFn={exportDataToCSV}
					refinedata={refineddata}
					setUniversity={setUniversity}
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
								.filter((value) => {
									if (university === "muk")
										return value.university === "Makerere University";
									if (university === "mubs")
										return value.university === "Makerere University Business School";
									if (university === "ucu")
										return value.university === "Uganda Christian University";
									if (university === "kiu")
										return value.university === "Kampala International University";
									if (university === "kyu")
										return value.university === "Kyambogo University";
									if (university === "umun")
										return value.university === "Uganda Martyrs University Nkozi";
									if (university === "nu")
										return value.university === "Ndejje University";
									return value;
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
