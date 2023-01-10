import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Stack, Container, Button } from "@mui/material";

const Page = () => {
	const savedResponse = useSelector((state) => state.steps.responses);

	const alcoholScores = savedResponse
		.slice(11, 20)
		.reduce((accumulator, curValue) => {
			return accumulator + curValue.score;
		}, 0);

	const drugScores = savedResponse
		.slice(21)
		.reduce((accumulator, curValue) => {
			return accumulator + curValue.score;
		}, 0);

	// const alcoholScores = 8
	// const drugScores = 0


	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			{alcoholScores >= 8 || drugScores >= 25 ? (
				<Grid container>
					<Grid sm={12} md={12}>
						<Stack sx={{ alignItems: "center" }} spacing={3}>
							<FontAwesomeIcon
								icon={faTrophy}
								style={{ color: "yellow", fontSize: "50px" }}
							/>
							<Typography variant="h5" sx={{ color: "white" }}>
								All Done!
							</Typography>
							<Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
								Results: You are at a high risk.
							</Typography>
							<Button
								variant="contained"
								size="large"
								sx={{
									backgroundColor: "#fff",
									color: "#7348cf",
									fontWeight: "bold",
									width: "30%",
									"&:hover": { color: "#fff", backgroundColor: "#7348cf" },
								}}
							>
								Continue
							</Button>
						</Stack>
					</Grid>
				</Grid>
			) : (
				<Grid container>
					<Grid sm={12} md={12}>
						<Stack sx={{ alignItems: "center" }} spacing={3}>
							<FontAwesomeIcon
								icon={faTrophy}
								style={{ color: "yellow", fontSize: "50px" }}
							/>
							<Typography variant="h5" sx={{ color: "white" }}>
								All Done!
							</Typography>
							<Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
								Results: You are at low risk.
							</Typography>
							<Typography variant="h5" sx={{ color: "white" }}>
								Thank you for you responses
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			)}
		</Container>
	);
};

export default Page;
