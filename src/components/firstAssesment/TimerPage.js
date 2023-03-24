import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import Timer from "../utils/Timer";
import StartToolTwo from "../utils/Tool2Timer";
import { useSelector } from "react-redux";

const TimerPage = () => {
	const savedResponse = useSelector((state) => state.steps.responses);
	const page = useSelector((state) => state.steps.activeStep);
	return (
		<Box
			sx={{
				background: "#e9f1f2",
				display: "flex",
				height: "100vh",
				paddingBottom: {xs:"100px"},
			}}
		>
			<Container fixed>
				{savedResponse[10] !== undefined ? <StartToolTwo /> : <Timer />}
			</Container>
		</Box>
	);
};

export default TimerPage;
