import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import ProgressBar from './utils/ProgressBar'
import { useSelector } from "react-redux";
import StartPage from "./section-1/StartPage"
import Page1 from "./section-1/Page1"
import Page2 from "./section-1/Page2";
import Page3 from "./section-1/Page3";
import Page4 from "./section-1/Page4";
import Page5 from "./section-1/Page5";
import Page6 from "./section-1/Page6";
import Page7 from "./section-1/Page7";
import Page8 from "./section-1/Page8";
import Page9 from "./section-1/Page9";
import Page10 from "./section-1/Page10";
import Page11 from "./section-1/Page11";
import Page12 from "./section-1/Page12";
import Page13 from "./section-1/Page13";
import Page14 from "./section-1/Page14";
import Page15 from "./section-1/Page15";
import Page16 from "./section-1/Page16";
import Page17 from "./section-1/Page17";
import Page18 from "./section-1/Page18";
import Page19 from "./section-1/Page19";
import Page20 from "./section-1/Page20";

import EndPage from "./section-1/EndPage"
import TimerPage from "./section-1/TimerPage"
import "animate.css"



export default function Layout() {
	const page = useSelector((state) => state.steps.activeStep);
	const endProcess = useSelector((state) => state.globalstate.processHasEnded);
	const showTimer = useSelector((state) => state.globalstate.showTimer);
	const savedResponse = useSelector((state) => state.steps.responses);

	console.log(savedResponse);
		
	return endProcess ? (
		<EndPage />
	) : showTimer ? (
		<TimerPage />
	) : (
		<>
			<Box className="scroll">
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
							return <Page15 />;
						case 16:
							return <Page16 />;
						case 17:
							return <Page17 />;
						case 18:
							return <Page18 />;
						case 19:
							return <Page19 />;
						case 20:
							return <Page20 />;
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

