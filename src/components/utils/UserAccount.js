import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateToken } from "../../redux/slices/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function UserMenu({ username }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = () => {
		dispatch(updateToken(""));
		navigate("/login");
		localStorage.clear();
	};

	return (
		<div>
			<span
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleLogout}
				style={{ cursor: "pointer" }}
			>
				{/* <Avatar
					username={username}
					aria-controls={open ? "basic-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					onClick={handleClick}
				/> */}
				<div className="flex">
					<p
						className="mr-2 text-black md:text-base"
					>
						Logout
					</p>
					<Typography
						sx={{
							color: "black",
							marginBottm: 0,
						}}
					>
						<FontAwesomeIcon
							icon={faRightFromBracket}
							sx={{
								fontSize: "60px",
							}}
						/>
					</Typography>
				</div>
			</span>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>
		</div>
	);
}
