import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import ProgressBar from "./utils/ProgressBar";
import { useSelector } from "react-redux";
import StartPage from "./firstAssesment/StartPage";
import StartTool2 from "./firstAssesment/StartTool2Page";
import StartTool3 from "./firstAssesment/StartTool3Page";
import Page1 from "./firstAssesment/Page1";
import Page2 from "./firstAssesment/Page2";
import Page3 from "./firstAssesment/Page3";
import Page4 from "./firstAssesment/Page4";
import Page5 from "./firstAssesment/Page5";
import Page6 from "./firstAssesment/Page6";
import Page7 from "./firstAssesment/Page7";
import Page8 from "./firstAssesment/Page8";
import Page9 from "./firstAssesment/Page9";
import Page10 from "./firstAssesment/Page10";
import Page11 from "./firstAssesment/Page11";
import Page12 from "./firstAssesment/Page12";
import Page13 from "./firstAssesment/Page13";
import Page14 from "./firstAssesment/Page14";
import Page16 from "./firstAssesment/Page16";
import Page17 from "./firstAssesment/Page17";
import Page18 from "./firstAssesment/Page18";
import Page19 from "./firstAssesment/Page19";
import Page20 from "./firstAssesment/Page20";
import Page21 from "./firstAssesment/Page21";
import Page22 from "./firstAssesment/Page22";
import Page23 from "./firstAssesment/Page23";
import Page24 from "./firstAssesment/Page24";
import Page25 from "./firstAssesment/Page25";
import Page26 from "./firstAssesment/Page26";
import Page27 from "./firstAssesment/Page27";
import Page28 from "./firstAssesment/Page28";
import Page29 from "./firstAssesment/Page29";
import Page30 from "./firstAssesment/Page30";
import Page31 from "./firstAssesment/Page31";
import EndPage from "./firstAssesment/EndPage";
import TimerPage from "./firstAssesment/TimerPage";
import EndAssesment from "./firstAssesment/AssesmentComplete";
import "animate.css";

export default function Layout() {
	const page = useSelector((state) => state.steps.activeStep);
	const pageNavigation = useSelector(
		(state) => state.globalstate.processHasEnded
	);
	const showTimer = useSelector((state) => state.globalstate.showTimer);
	const showTool2Page = useSelector((state) => state.globalstate.tool2page);
	const showTool3Page = useSelector((state) => state.globalstate.tool3page);


	console.log("Page", page);
	// console.log(savedResponse);
	// console.log(showTimer);

	return pageNavigation ? (
		<EndPage />
	) : showTimer ? (
		<TimerPage />
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
						page === 0
							? "#3f55af"
							: page > 10 && page <= 20
							? "#cfefff"
							: page > 20 && page <= 30
							? "#f5ffcf"
							: page === 31
							? "#7348CF"
							: "#e9f1f2",
					display: "flex",
					padding: { md: "0 5%", xs: 0 },
					height: {
						xs: page === 5 ? "850px" : page === 11 || page === 21 ? "650px" : "100%",
					},
				}}
			>
				{(() => {
					switch (page) {
						case 0:
							return <StartPage />;
						case 1:
							return <Page1 />;
						case 2:
							return <Page2 />;
						case 3:
							return <Page3 />;
						case 4:
							return <Page4 />;
						case 5:
							return <Page5 />;
						case 6:
							return <Page6 />;
						case 7:
							return <Page7 />;
						case 8:
							return <Page8 />;
						case 9:
							return <Page9 />;
						case 10:
							return <Page10 />;
						case 11:
							return <Page11 />;
						case 12:
							return <Page12 />;
						case 13:
							return <Page13 />;
						case 14:
							return <Page14 />;
						case 15:
							return <Page16 />;
						case 16:
							return <Page17 />;
						case 17:
							return <Page18 />;
						case 18:
							return <Page19 />;
						case 19:
							return <Page20 />;
						case 20:
							return <Page21 />;
						case 21:
							return <Page22 />;
						case 22:
							return <Page23 />;
						case 23:
							return <Page24 />;
						case 24:
							return <Page25 />;
						case 25:
							return <Page26 />;
						case 26:
							return <Page27 />;
						case 27:
							return <Page28 />;
						case 28:
							return <Page29 />;
						case 29:
							return <Page30 />;
						case 30:
							return <Page31 />;
						case 31:
							return <EndAssesment />;
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
