import { Typography, Stack, Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "animate.css";
import "animate.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { showbaseline } from "../../redux/slices/globalstateSlice";
import { useDispatch, useSelector } from "react-redux";

const StartPage = () => {
	const dispatch = useDispatch();
	const userDetails = useSelector((state) => state.auth.userDetails);
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
						<Typography
							variant="h4"
							sx={{ color: "white", fontWeight: "bold", fontFamily: "Poppins-Bold" }}
						>
							Hi {userDetails.name}
						</Typography>
						<Typography variant="h5" sx={{ color: "white" }}>
							We commend you for reaching this far!
						</Typography>
						<Typography variant="h5" sx={{ color: "white" }}>
							You've been selected for the{" "}
							<span style={{ color: "yellow" }}>{userDetails.selection} arm</span>.
						</Typography>
						<Typography variant="h5" sx={{ color: "white" }}>
							On this stage, you are going to do a baseline assesment where we add more
							questions to those already asked during the screening.
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
