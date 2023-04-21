import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Outlet, Link } from "react-router-dom";


import UserAccount from "./utils/UserAccount";

import { useSelector } from "react-redux";
import Logo from "../images/websa-logo-updated.png"
const drawerWidth = 280;

export const pages = [
	{ name: "Home", link: "/" },
	{ name: "Motivational Interviewing", link: "/motivational-interviewing" },
	{ name: "Profile", link: "/profile" },
	{ name: "Practical Advice", link: "/practical-advice" },
	{ name: "Resources", link: "/resources" },
];

const Main = styled("main", {shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
	// const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const userDetails = useSelector((state) => state.auth.userDetails);

	console.log(userDetails.selection);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	console.log(window.location.pathname)
	return (
		<Box>
			<CssBaseline />

			<Toolbar
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				{/* {userDetails.selection === "control" ? null : (
							<span
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerOpen}
								edge="start"
								style={{
									mr: 2,
									...(open && { display: "none" }),
									display: "flex",
									alignItems: "center",
									cursor: "pointer",
								}}
							>
								<MenuIcon
									sx={{ color: "#fff", fontSize: "22px", marginRight: "5px" }}
								/>
								<Typography
									variant="h6"
									sx={{
										color: "#fff",
										fontSize: "20px",
										display: { xs: "none", md: "block" },
									}}
								>
									Menu
								</Typography>
							</span>
						)} */}

				<img src={Logo} alt="Websa logo" className="max-w-[57%]" />
				<span>
					<UserAccount />
				</span>
			</Toolbar>

			<div
				open={open}
				className={`min-h-screen bg-websa-green w-full flex flex-col items-center py-[10%] md:py-[3%]`}
			>
				<div className="w-[90%] md:w-[80%]">
					<Outlet />
				</div>
				<ul className="mt-6">
					{pages.map((value) => {
						return (
							<li className="md:inline-block mb-4 md:mr-6 md:mb-0">
								{" "}
								<Link to={value.link}>
									<span className="text-green-200 hover:text-white hover:underline">
										{value.name}
									</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</Box>
	);
}
