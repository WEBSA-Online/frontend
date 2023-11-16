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
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";
import Moment from "react-moment";

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
						<span className="font-binusu-bold text-base">{headCell.label}</span>
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

function TableToolbar() {
	return (
		<Box className="pt-6 pb-4">
			<Typography variant="h6">
				<span className="font-binusu-bold">All Participants Table</span>
			</Typography>
		</Box>
	);
}

export default function AllUsersTable({ userData }) {
	const [order, setOrder] = React.useState("asc");
	const [orderBy, setOrderBy] = React.useState("calories");

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

	return (
		<Box sx={{ width: "100%" }}>
			<Paper sx={{ width: "100%", mb: 2 }} className="px-5">
				<TableToolbar />
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
												{row.provider.toUpperCase()} <br/> {row.phone}
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
