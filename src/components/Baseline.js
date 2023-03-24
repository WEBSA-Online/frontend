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
import Page34b from "./baseline/Page34b";
import Page35 from "./baseline/Page35";
import Page36 from "./baseline/Page36";
import Page37 from "./baseline/Page37";
import Page37b from "./baseline/Page37b";
import Page38 from "./baseline/Page38";
import Page40 from "./baseline/Page40";
import Page41 from "./baseline/Page41";
import Page42 from "./baseline/Page42";
import Page43 from "./baseline/Page43";
import Page44 from "./baseline/Page44";
import Page45 from "./baseline/Page45";
import Page46 from "./baseline/Page46";
import Page47 from "./baseline/Page47";
import Page48 from "./baseline/Page48";
import Page49 from "./baseline/Page49";
import Page51 from "./baseline/Page51";
import Page52 from "./baseline/Page52";
import Page53 from "./baseline/Page53";
import Page54 from "./baseline/Page54";
import Page55 from "./baseline/Page55";
import Page56 from "./baseline/Page56";
import Page57 from "./baseline/Page57";
import Page58 from "./baseline/Page58";
import Page59 from "./baseline/Page59";
import Page60 from "./baseline/Page60";
import Page61 from "./baseline/Page61";
import Page62 from "./baseline/Page62";
import Page63 from "./baseline/Page63";
import Page64 from "./baseline/Page64";
import Page65 from "./baseline/Page65";
import Page66 from "./baseline/Page66";
import Page67 from "./baseline/Page67";
import Page68 from "./baseline/Page68";
import Page69 from "./baseline/Page69";
import Page70 from "./baseline/Page70";
import Page71 from "./baseline/Page71";
import BaselineComplete from "./baseline/BaselineComplete";
import "animate.css";


export default function Layout() {
	const page = useSelector((state) => state.steps.activeStep);
	const pageNavigation = useSelector((state) => state.globalstate.startbaseline);
	const showTool2Page = useSelector((state) => state.globalstate.tool2page);
	const showTool3Page = useSelector((state) => state.globalstate.tool3page);
	const pathname = window.location.pathname;

	const assesmentOneSteps = useSelector((state) => state.steps);
	const baselineSteps = useSelector((state) => state.steps.baselineSteps);
	const savedResponse = useSelector((state) => state.steps.responses);
	const totalpages =
		pathname === "/baseline" ? baselineSteps : assesmentOneSteps;

	const pageHeight = pathname === "/baseline" && page >= 12 && page <= 15 ? true : false;

	console.log(page);
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
						page === totalpages - 1
							? "#7348CF"
							: pathname === "/baseline"
							? "rgb(230, 245, 250)"
							: page > 10 && page <= 20
							? "#cfefff"
							: page > 20 && page <= 31
							? "#f5ffcf"
							: "#e9f1f2",
					display: "flex",
					// height: pageHeight ? "100%" : "100vh",
					padding: { md: "0 5%", xs: 0 },
					height:{xs:pathname === "/baseline" && page >=11 && page <=14 ? "1600px" : "700px" }
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
							return <Page34b />;
						case 4:
							return <Page35 />;
						case 5:
							return <Page36 />;
						case 6:
							return <Page37 />;
						case 7:
							return <Page37b />;
						case 8:
							return <Page38 />;
						case 9:
							return <Page40 />;
						case 10:
							return <Page41 />;
						case 11:
							return <Page42 />;
						case 12:
							return <Page43 />;
						case 13:
							return <Page44 />;
						case 14:
							return <Page45 />;
						case 15:
							return <Page46 />;
						case 16:
							return <Page47 />;
						case 17:
							return <Page48 />;
						case 18:
							return <Page49 />;
						case 19:
							return <Page51 />;
						case 20:
							return <Page52 />;
						case 21:
							return <Page53 />;
						case 22:
							return <Page54 />;
						case 23:
							return <Page55 />;
						case 24:
							return <Page56 />;
						case 25:
							return <Page57 />;
						case 26:
							return <Page58 />;
						case 27:
							return <Page59 />;
						case 28:
							return <Page60 />;
						case 29:
							return <Page61 />;
						case 30:
							return <Page62 />;
						case 31:
							return <Page63 />;
						case 32:
							return <Page64 />;
						case 33:
							return <Page65 />;
						case 34:
							return <Page66 />;
						case 35:
							return <Page67 />;
						case 36:
							return <Page68 />;
						case 37:
							return <Page69 />;
						case 38:
							return <Page70 />;
						case 39:
							return <Page71 />;
						case 40:
							return <BaselineComplete />;
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
					<BottomNavigation sx={{ height: { xs: "80px", md: "80px" } }}>
						<ProgressBar />
					</BottomNavigation>
				</Paper>
			</Box>
		</>
	);
}
