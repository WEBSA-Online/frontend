import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import Timer from "../utils/Timer"



const TimerPage = () => {
	return (
		<Box
			sx={{
				background: "#e9f1f2",
				display: "flex",
				height: "100vh",
				paddingTop: "4%",
			}}
		>
			<Container fixed>
				<Timer />
			</Container>
		</Box>
	);
};

export default TimerPage;
