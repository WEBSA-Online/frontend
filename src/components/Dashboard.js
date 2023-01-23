import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { websaTheme } from "../muiStyles";
import UserAccount from "./utils/UserAccount"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faXmark,
} from "@fortawesome/free-solid-svg-icons";

const drawerWidth = 280;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
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
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<ThemeProvider theme={websaTheme}>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					position="fixed"
					open={open}
					sx={{ backgroundColor: "#00a551", boxShadow: "none" }}
				>
					<Toolbar
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
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
							<MenuIcon sx={{ color: "#fff", fontSize: "22px", marginRight: "5px" }} />
							<Typography variant="h6" sx={{ color: "#fff", fontSize: "20px" }}>
								Menu
							</Typography>
						</span>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ color: "#fff", fontWeight: "700" }}
						>
							Websa Online
						</Typography>
						<span>
							<UserAccount />
						</span>
					</Toolbar>
				</AppBar>
				<Drawer
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						"& .MuiDrawer-paper": {
							width: drawerWidth,
							boxSizing: "border-box",
							backgroundColor: "#f7f7f7",
						},
					}}
					variant="persistent"
					anchor="left"
					open={open}
				>
					<DrawerHeader>
						<IconButton onClick={handleDrawerClose}>
							<FontAwesomeIcon
								icon={faXmark}
								className="fontAwesomeIcons"
								style={{ fontSize: "18px" }}
							/>
						</IconButton>
					</DrawerHeader>
					<List>
						{[
							"Personal Information",
							"Motivational Interviewing",
							"Practical Advice",
						].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Drawer>
				<Main open={open}>
					<DrawerHeader />
					<Outlet />
				</Main>
			</Box>
		</ThemeProvider>
	);
}
