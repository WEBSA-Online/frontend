import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";


const EndPage = () => {
	const page = useSelector((state) => state.steps.activeStep);
	const savedResponse = useSelector((state) => state.responses.responses);

  
	return (
		<Box
			sx={{
				background: "#a4050b",
				display: "flex",
				height: "100vh",
				paddingTop: "12%",
			}}
		>
			<Container fixed>
				<Stack spacing={2}>
					<h2 style={{ fontSize: "50px", color: "white" }}>All done!</h2>
					<p style={{fontSize: "40px", color: "white" }}>
						Thank you for sharing your responses.
					</p>
				</Stack>
			</Container>
		</Box>
	);
};

export default EndPage;
