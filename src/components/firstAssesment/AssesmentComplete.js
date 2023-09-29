import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Stack, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../API";
import { resetResponses, resetStep } from "../../redux/slices/stepSlice";
import React from "react";

const Page = () => {
	const [loading, setLoading] = React.useState(false);
	const savedResponse = useSelector((state) => state.steps.responses);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	let alcoholScores = 0;
	let drugScores = 0;

	if (savedResponse[11].answer !== "Never")
		alcoholScores = savedResponse
			.slice(11, 19)
			.reduce((accumulator, curValue) => {
				return accumulator + curValue.score;
			}, 0);

	if (savedResponse[20].answer !== "Never")
		drugScores = savedResponse.slice(21).reduce((accumulator, curValue) => {
			return accumulator + curValue.score;
		}, 0);

	const submit = async()=> {
		setLoading(true);
		try {
			await axios.post(`${API_URL}/general`, {
				name: savedResponse[1].answer,
				email: savedResponse[9].answer,
				phone: savedResponse[10].answer,
				userData: savedResponse,
			});
			if(alcoholScores >= 8 || drugScores >= 25) {								
				setLoading(false);
				navigate("/consent");				
			} else {
				setLoading(false);
				dispatch(resetResponses());
				dispatch(resetStep(0));
				navigate("/");
			}					
		} catch (err) {
			setLoading(false);
			console.log(err);
			if(err.message==="Request failed with status code 401"){
				navigate("/");
			} else {
				alert(`${err.message}`)
			}
		}
	};

	return (
		<Container
			fixed
			sx={{
				paddingTop: "6%",
				height: { xs: "750px", sm: "auto" },
			}}
		>
			<Grid container>
				<Grid sm={12} md={12}>
					<Stack sx={{ alignItems: "center" }} spacing={3}>
						<FontAwesomeIcon
							icon={faTrophy}
							style={{ color: "yellow", fontSize: "60px" }}
						/>
						{alcoholScores >= 8 || drugScores >= 25 ? (
							<>
								<Typography
									variant="h5"
									sx={{
										fontFamily: "Poppins-Bold",
										color: "white",
										textAlign: "center",
									}}
								>
									Thank you for participating in the screening.
								</Typography>
								<Typography
									variant="h4"
									sx={{
										color: "white",
										fontWeight: "bold",
										fontFamily: "Poppins-Regular",
										fontSize: { sm: "25px", xs: "21px" },
										textAlign: "center",
									}}
								>
									Your AUDIT score is{" "}
									<span class="highlight-text-yellow">{alcoholScores}/40</span> <br />
									<br />
									DUDIT score is{" "}
									<span class="highlight-text-yellow">{drugScores}/40</span>
								</Typography>
							</>
						) : (
							<>
								<Typography
									variant="h5"
									sx={{
										fontFamily: "Poppins-Bold",
										color: "white",
										textAlign: "center",
									}}
								>
									Thank you for taking part in this study.
								</Typography>
								<Typography
									variant="h4"
									sx={{
										color: "white",
										fontWeight: "bold",
										fontFamily: "Poppins-Regular",
										fontSize: { sm: "25px", xs: "21px" },
										textAlign: "center",
									}}
								>
									you’re at low risk. Continue living healthy. This is the end of the
									assessment
								</Typography>
							</>
						)}

						{alcoholScores >= 8 || drugScores >= 25 ? (
							<Button
								variant="contained"
								size="large"
								sx={{
									backgroundColor: "#fff",
									color: "#7348cf",
									fontWeight: "bold",
									width: { md: "20%", sm: "50%", xs: "100%" },
									"&:hover": { color: "#fff", backgroundColor: "#7348cf" },
									textAlign: "center",
								}}
								onClick={submit}
							>
								{loading ? "loading..." : "Continue"}
							</Button>
						) : (
							<Button
								variant="contained"
								size="large"
								sx={{
									backgroundColor: "#fff",
									color: "#7348cf",
									fontWeight: "bold",
									width: { md: "30%", sm: "50%", xs: "100%" },
									"&:hover": { color: "#fff", backgroundColor: "#7348cf" },
								}}
								onClick={submit}
							>
								{loading ? "loading..." : "End"}
							</Button>
						)}
						<Typography
							variant="h5"
							sx={{ color: "white", textAlign: "center", fontSize: "18px" }}
						>
							AUDIT.
							<br />1 to 7 = low-risk, consumption 8-14 = hazardous or harmful
							drinking, 15-40 = Moderate-Severe drinking (likelihood of dependence)
						</Typography>
						<Typography
							variant="h5"
							sx={{ color: "white", textAlign: "center", fontSize: "18px" }}
						>
							DUDIT.
							<br />
							0-5 = low risk, 6-24 = hazardous/harmful use, 25-40 moderate = heavily
							dependent
						</Typography>
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Page;
