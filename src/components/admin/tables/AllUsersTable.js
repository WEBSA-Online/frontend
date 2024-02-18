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
import { FaCircleCheck, FaCircleExclamation, FaDownload } from "react-icons/fa6";
import Moment from "react-moment";
import SelectFilter from "../ui/SelectFilter";
import moment from "moment";
import Papa from "papaparse";

const headCells = [
	{
		id: "name",
		disablePadding: true,
		label: "Name",
	},
	{
		id: "email",
		disablePadding: false,
		label: "Email",
	},
	{
		id: "phone",
		numeric: true,
		disablePadding: false,
		label: "Phone",
	},
	{
		id: "date",
		numeric: true,
		disablePadding: false,
		label: "Date Of Participation",
	},
	{
		id: "university",
		numeric: true,
		disablePadding: false,
		label: "University",
	},
	{
		id: "data",
		numeric: true,
		disablePadding: false,
		label: "Received Data?",
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
	setNetwork,
	setUniversity,
	setGotData,
	filteteredData,
}) {
	const networkProvider = [
		{ value: "MTN", bool: "mtn" },
		{ value: "Airtel", bool: "airtel" }
	];
	const gotData = [
		{ value: "Received Data", bool: "true" },
		{ value: "Hasn't Received Data", bool: "false" },
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
		link.download = `All-Participants-General-Data.csv`;

		link.click();

		// Clean up by revoking the URL to release resources
		URL.revokeObjectURL(csvUrl);
	};
	return (
		<Box className="pt-6 pb-4 flex justify-between">
			<div className="flex items-center space-x-3">
				<div>
					<span className="text-sm">Sort by Network:</span>
					<SelectFilter setMethod={setNetwork} options={networkProvider} />
				</div>
				<div>
					<span className="text-sm">Sort by Data Bundles:</span>
					<SelectFilter setMethod={setGotData} options={gotData} />
				</div>
				<div>
					<span className="text-sm">Sort by Univeristy:</span>
					<SelectFilter setMethod={setUniversity} options={universities} />
				</div>
				<div>
					<button
						onClick={() => exportDataToCSV(filteteredData)}
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

export default function AllUsersTable({ userData }) {
	const [order, setOrder] = React.useState("asc");
	const [orderBy, setOrderBy] = React.useState("calories");
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(25);
	const [network, setNetwork] = React.useState("");
	const [university, setUniversity] = React.useState("");
	const [gotData, setGotData] = React.useState("");

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

	
	const filteteredData = userData
		.filter((value) => {
			if (network === "mtn") {
				return value.provider === "mtn";
			} else if (network === "airtel") {
				return value.provider === "airtel";
			} else {
				return value;
			}
		})
		.filter((value) => {
			if (gotData === "false") {
				return value.gotMobileData === false;
			} else if (gotData === "true") {
				return value.gotMobileData === true;
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
		.sort(sortReferrals)
		.map((value) => {
			return {
				Name: value.name,
				Email: value.email,
				Phone: value.phone,
				Network: value.provider,
				University: value.university,
				"Received internet data": value.gotMobileData === true ? "Yes" : "No",
				"Date of Participation": moment(value.created_at).format("D-MMMM-YYYY"),
			};
		});

	return (
		<Box sx={{ width: "100%" }}>
			<Paper sx={{ width: "100%", mb: 2 }} className="px-5">
				<TableToolbar
					setNetwork={setNetwork}
					setUniversity={setUniversity}
					setGotData={setGotData}
					filteteredData={filteteredData}
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
									if (network === "mtn") {
										return value.provider === "mtn";
									} else if (network === "airtel") {
										return value.provider === "airtel";
									} else {
										return value;
									}
								})
								.filter((value) => {
									if (gotData === "false") {
										return value.gotMobileData === false;
									} else if (gotData === "true") {
										return value.gotMobileData === true;
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
											<TableCell align="left">{row.email}</TableCell>
											<TableCell align="left">
												{row.provider.toUpperCase()} <br /> {row.phone}
											</TableCell>
											<TableCell align="left">
												{" "}
												<Moment format="Do MMMM YYYY">{row.created_at}</Moment>
											</TableCell>
											<TableCell align="left">{row.university}</TableCell>
											<TableCell align="left">
												{row.gotMobileData ? (
													<div className="flex">
														<FaCircleCheck className="text-green-700 text-lg mr-1" />
														<span>Received</span>
													</div>
												) : (
													<div className="flex">
														<FaCircleExclamation className="text-red-700 text-lg mr-1" />
														<span>Not yet</span>
													</div>
												)}
											</TableCell>
											<TableCell align="left">
												{/* <KycResultsModal userdetails={row} /> */}
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
