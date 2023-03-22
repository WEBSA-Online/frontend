import { Typography, Stack, Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "animate.css";
import "animate.css";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { showTool3page } from "../../redux/slices/globalstateSlice";

const StartPage = () => {
	const dispatch = useDispatch();

	const [proceed, setProceed] = React.useState(false);

	return (
		<Box
			sx={{
				backgroundColor: "#3f55af",
				height: { sm: "auto", md: "100vh" },
				display: "flex",
				alignItems: "center",
				padding: { xs: "3%" },
			}}
		>
			<Container fixed>
				{!proceed ? (
					<Grid container>
						<Grid sm={12} md={12}>
							<Stack sx={{ alignItems: "center" }} spacing={3}>
								<FontAwesomeIcon
									icon={faFaceSmileWink}
									style={{ color: "yellow", fontSize: "50px" }}
								/>
								<Typography
									variant="h4"
									sx={{
										fontFamily: "Poppins-Bold",
										color: "white",
										textAlign: "center",
									}}
								>
									You are almost there
								</Typography>
								<Button
									variant="contained"
									size="large"
									sx={{
										backgroundColor: "#fff",
										color: "#3f55af",
										fontWeight: "bold",
										width: { md: "30%", sm: "50%", xs: "100%" },
										"&:hover": { color: "#fff" },
									}}
									onClick={() => setProceed(true)}
								>
									Proceed
								</Button>
							</Stack>
						</Grid>
					</Grid>
				) : (
					<Grid sm={12} md={12} sx={{ marginBottom: "20px" }}>
						<Stack spacing={2}>
							<Typography
								variant="h4"
								sx={{
									fontFamily: "Poppins-Bold",
									color: "white",
									fontSize: { xs: "22px" },
								}}
							>
								DUDIT- Drug Use Disorders Identification Test
							</Typography>
							<Typography
								variant="h5"
								sx={{
									fontFamily: "Poppins-Regular",
									color: "white",
									fontSize: { xs: "18px" },
								}}
							>
								Here are a few questions about drugs including marijuana. Please answer
								as correctly and honestly as possible by indicating which answer is
								right for you. Your answers will remain confidential within, so please
								be honest.
							</Typography>
							<Typography
								variant="h5"
								sx={{
									fontFamily: "Poppins-Regular",
									color: "white",
									fontSize: { xs: "18px" },
								}}
							>
								In the event that these results need to be shared as part of your care
								plan, we will discuss with you why sharing is necessary, seek your
								consent to share and ask you to sign a Release of Information Form.
							</Typography>
							<Typography
								variant="h5"
								sx={{
									fontFamily: "Poppins-Regular",
									color: "white",
									fontSize: { xs: "18px" },
								}}
							>
								You may refuse at any time to have these results shared.
							</Typography>
							<Button
								variant="contained"
								size="large"
								sx={{
									backgroundColor: "#fff",
									color: "#3f55af",
									fontWeight: "bold",
									width: { md: "20%", sm: "50%", xs: "100%" },
									"&:hover": { color: "#fff" },
								}}
								onClick={() => dispatch(showTool3page())}
							>
								Start
							</Button>
						</Stack>
					</Grid>
				)}
			</Container>
		</Box>
	);
};

export default StartPage;
