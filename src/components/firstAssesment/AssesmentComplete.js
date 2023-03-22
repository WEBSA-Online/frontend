import {  useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Stack, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Page = () => {
	const savedResponse = useSelector((state) => state.steps.responses);
	const navigate = useNavigate()

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

	const submit=()=> {
		navigate("/consent")
	}

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
							<Typography
								variant="h5"
								sx={{ fontFamily: "Poppins-Bold", color: "white", textAlign: "center" }}
							>
								Thanks for participating in the screening.
							</Typography>
							{alcoholScores >= 8 && (
								<Typography
									variant="h4"
									sx={{
										fontFamily: "Poppins-Regular",
										color: "white",
										fontWeight: "bold",
										textAlign: "center",
										fontSize: { xs: "18px" },
									}}
								>
									Your are on{" "}
									<span class="highlight-text-yellow">
										the High Risk side of alcohol use disorder.
									</span>
								</Typography>
							)}
							{drugScores >= 25 && (
								<Typography
									variant="h4"
									sx={{
										color: "white",
										fontWeight: "bold",
										fontFamily: "Poppins-Regular",
										textAlign: "center",
										fontSize: { xs: "18px" },
									}}
								>
									Your are on{" "}
									<span class="highlight-text-yellow">
										the High Risk side of drug use disorder.
									</span>
								</Typography>
							)}
							<Button
								variant="contained"
								size="large"
								sx={{
									backgroundColor: "#fff",
									color: "#7348cf",
									fontWeight: "bold",
									width: { md: "20%", sm: "50%", xs: "100%" },
									"&:hover": { color: "#fff", backgroundColor: "#7348cf" },
								}}
								onClick={submit}
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
							<Typography
								variant="h5"
								sx={{ color: "white", fontFamily: "Poppins-Bold" }}
							>
								Thanks for participating in the screening.
							</Typography>
							<Typography
								variant="h4"
								sx={{
									color: "white",
									fontWeight: "bold",
									fontFamily: "Poppins-Regular",
								}}
							>
								You are at low risk.
							</Typography>
							<a href="https://websaonline.com">
								<Button
									variant="contained"
									size="large"
									sx={{
										backgroundColor: "#fff",
										color: "#7348cf",
										fontWeight: "bold",
										width: { md: "20%", sm: "50%", xs: "100%" },
										"&:hover": { color: "#fff", backgroundColor: "#7348cf" },
									}}
								>
									Continue
								</Button>
							</a>
						</Stack>
					</Grid>
				</Grid>
			)}
		</Container>
	);
};

export default Page;
