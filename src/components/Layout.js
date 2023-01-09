import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import ProgressBar from './utils/ProgressBar'
import { useSelector, useDispatch } from "react-redux";
import {changeIsChecked} from "../redux/slices/globalstateSlice"
import StartPage from "./pages/StartPage"
import StartTool2 from "./pages/StartTool2Page";
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Page11 from "./pages/Page11";
import Page12 from "./pages/Page12";
import Page13 from "./pages/Page13";
import Page14 from "./pages/Page14";
import Page15 from "./pages/Page15";
import Page16 from "./pages/Page16";
import Page17 from "./pages/Page17";
import Page18 from "./pages/Page18";
import Page19 from "./pages/Page19";
import Page20 from "./pages/Page20";

import EndPage from "./pages/EndPage"
import TimerPage from "./pages/TimerPage"
import "animate.css"



export default function Layout() {
	const page = useSelector((state) => state.steps.activeStep);
	const pageNavigation = useSelector((state) => state.globalstate.processHasEnded);
	const showTimer = useSelector((state) => state.globalstate.showTimer);
	const showTool2Page = useSelector((state) => state.globalstate.tool2page);
	const savedResponse = useSelector((state) => state.steps.responses);
	const isChecked = useSelector((state) => state.globalstate.isChecked);
	const dispatch = useDispatch()
	

	// if(page===11){
	// 	dispatch(changeIsChecked({isChecked:true}))
	// } else {
	// 	dispatch(changeIsChecked({ isChecked:false}));
	// }
		
	return pageNavigation ? (
		<EndPage />
	) : showTimer ? (
		<TimerPage />
	) : showTool2Page ? (
		<StartTool2 />
	) : (
		<>
			<Box
				className="scroll"
				sx={{
					background: page === 0 ? "#3f55af" : page > 10 ? "#cfefff" : "#e9f1f2",
					display: "flex",
					height: "100vh",
					padding: "0 5%",
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

