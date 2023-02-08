import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import ProgressBar from "./utils/ProgressBar";
import { useSelector } from "react-redux";
import StartPage from "./baseline/StartPage";
import StartTool2 from "./firstAssesment/StartTool2Page";
import StartTool3 from "./firstAssesment/StartTool3Page";
import Page32 from "./baseline/Page32";
import Page33 from "./baseline/Page33";
import Page34 from "./baseline/Page34";
import Page35 from "./baseline/Page35";
import Page36 from "./baseline/Page36";
import Page37 from "./baseline/Page37";
import Page38 from "./baseline/Page38";
import "animate.css";

export default function Layout() {
	const page = useSelector((state) => state.steps.activeStep);
	const pageNavigation = useSelector((state) => state.globalstate.startbaseline);
	const showTool2Page = useSelector((state) => state.globalstate.tool2page);
	const showTool3Page = useSelector((state) => state.globalstate.tool3page);
	const savedResponse = useSelector((state) => state.steps.responses);

   const pathname = window.location.pathname;

   console.log(savedResponse);


	return pageNavigation ? (
		<StartPage />
	) : showTool2Page ? (
		<StartTool2 />
	) : showTool3Page ? (
		<StartTool3 />
	) : (
		<>
			<Box
				className="scroll"
				sx={{
					background:
						pathname === "/baseline"
							? "#e7ddff"
							: page > 10 && page <= 20
							? "#cfefff"
							: page > 20 && page <= 31
							? "#f5ffcf"
							: page === 32
							? "#7348CF"
							: "#e9f1f2",
					display: "flex",
					height: "100vh",
					padding: "0 5%",
				}}
			>
				{(() => {
					switch (page) {
						case 0:
							return <Page32 />;
						case 1:
							return <Page33 />;
						case 2:
							return <Page34 />;
						case 3:
							return <Page35 />;
						case 4:
							return <Page36 />;
						case 5:
							return <Page37 />;
						case 6:
							return <Page38 />;
						default:
							return null;
					}
				})()}
			</Box>
			<Box>
				<Paper
					sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
					elevation={10}
				>
					<BottomNavigation sx={{ height: "80px" }}>
						<ProgressBar />
					</BottomNavigation>
				</Paper>
			</Box>
		</>
	);
}
