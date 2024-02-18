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
import { SiMicrosoftexcel } from "react-icons/si";
import Papa from "papaparse";

const headCells = [
	{
		id: "question",
		disablePadding: true,
		label: "Question",
	},
	{
		id: "answer",
		numeric: true,
		disablePadding: false,
		label: "Answer",
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

function TableToolbar({ newUserData, scores, name}) {
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
		link.download = `${name}-initial-survey-details.csv`;

		link.click();

		// Clean up by revoking the URL to release resources
		URL.revokeObjectURL(csvUrl);
	};
	return (
		<Box className="pt-6 pb-4 flex justify-between">
			<Typography variant="h6">
				<span className="font-websa-bold">Initial Survey Data</span>
			</Typography>
			<div className="flex items-center">
				<div>
					<p className="font-websa-bold text-lg mr-5">Total Score from Survey: {scores}</p>
				</div>
				<button
					className="bg-websa-green flex items-center text-white text-xs px-3 py-2 rounded-sm font-websa-regular"
					onClick={() => exportDataToCSV([newUserData])}
				>
					<SiMicrosoftexcel className="mr-2" />
					Download Data
				</button>
			</div>
		</Box>
	);
}

export default function InitialSurveryTable({ userData, newUserData, scores, name}) {
	const [order, setOrder] = React.useState("asc");
	const [orderBy, setOrderBy] = React.useState("calories");
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(25);

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


	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userData.length) : 0;

	return (
		<Box sx={{ width: "100%" }}>
			<Paper sx={{ width: "100%", mb: 2 }} className="px-5">
				<TableToolbar
					newUserData={newUserData}
					scores={scores}
					name={name}
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
								.filter((value) => value !== null)
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									const labelId = `enhanced-table-checkbox-${index}`;
									return (
										<TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
											<TableCell component="th" id={labelId} scope="row" padding="none">
												{row.question}
											</TableCell>
											<TableCell align="left">{row.answer}</TableCell>
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
