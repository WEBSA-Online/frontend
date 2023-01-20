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

	// const alcoholScores = 9
	// const drugScores = 7


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
								style={{ color: "yellow", fontSize: "60px" }}
							/>
							<Typography variant="h5" sx={{ color: "white" }}>
								Thanks for participating in the screening.
							</Typography>
							{alcoholScores >= 8 && (
								<Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
									Your score on Audit is{" "}
									<span class="highlight-text-yellow">{alcoholScores}</span> which is on
									high side of alcohol use disorder.
								</Typography>
							)}
							{drugScores >= 25 && (
								<Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
									Your DUDIT score is{" "}
									<span class="highlight-text-yellow">{drugScores}</span> and its on high
									side of drug use disorder.
								</Typography>
							)}

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
								style={{ color: "yellow", fontSize: "80px" }}
							/>
							<Typography variant="h5" sx={{ color: "white" }}>
								Thanks for participating in the screening.
							</Typography>
							<Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
								You are at low risk.
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			)}
		</Container>
	);
};

export default Page;
