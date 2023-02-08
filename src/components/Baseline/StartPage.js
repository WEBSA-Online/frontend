import { Typography, Stack, Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "animate.css";
import "animate.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { showbaseline } from "../../redux/slices/globalstateSlice";

const StartPage = () => {
	const dispatch = useDispatch();
	return (
		<Box
			sx={{
				backgroundColor: "#3f55af",
				height: "100vh",
				display: "flex",
				alignItems: "center",
			}}
		>
			<Container fixed>
				<Grid sm={12} md={12} sx={{ marginBottom: "20px" }}>
					<Stack spacing={2}>
						<Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
							BASELINE ASSESSMENT TOOL
						</Typography>
						<Typography variant="h5" sx={{ color: "white" }}>
							On this stage we add more questions to those already asked during the
							screening.
						</Typography>
						<Button
							variant="contained"
							size="large"
							sx={{
								backgroundColor: "#fff",
								color: "#3f55af",
								fontWeight: "bold",
								width: "20%",
								"&:hover": { color: "#fff" },
							}}
							onClick={() => dispatch(showbaseline())}
						>
							Start
						</Button>
					</Stack>
				</Grid>
			</Container>
		</Box>
	);
};

export default StartPage;
