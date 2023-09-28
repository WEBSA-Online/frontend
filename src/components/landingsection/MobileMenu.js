import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

export default function BasicMenu({ menu }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const location = useLocation();
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			{/* <Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				Dashboard
			</Button> */}
			<LuMenu
				onClick={handleClick}
				className="text-4xl cursor-pointer font-websa-bold text-black"
			/>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{menu.map((value) => {
					return (
						<MenuItem>
							<Link
								className={`font-websa-bold text-base px-3  ${
									location.pathname === value.link ? `text-green-700` : null
								}`}
								to={value.link}
							>
								{value.name}
							</Link>
						</MenuItem>
					);
				})}
				<MenuItem>
					<Link to="/login">
						<button className="font-websa-bold transition-all bg-websa-red hover:bg-websa-green py-2 px-2.5 rounded shadow-sm text-white font-bold text-sm w-[200px]">
							LOGIN
						</button>
					</Link>
				</MenuItem>
			</Menu>
		</div>
	);
}
