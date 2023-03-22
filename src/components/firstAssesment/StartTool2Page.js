import {Typography, Stack, Container, Box} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "animate.css";
import "animate.css";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFaceSmile} from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { showTool2page } from "../../redux/slices/globalstateSlice";


const StartPage = () => {
   const dispatch = useDispatch()

   const [proceed, setProceed] = React.useState(false)

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
									icon={faFaceSmile}
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
									Thank you for completing section one
								</Typography>
								<Button
									variant="contained"
									size="large"
									sx={{
										fontFamily: "Poppins-Bold",
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
									fontWeight: "bold",
									fontSize: { xs: "22px" },
								}}
							>
								The Alcohol Use Disorders Identification Test
							</Typography>
							<Typography
								variant="h5"
								sx={{
									fontFamily: "Poppins-Regular",
									color: "white",
									fontSize: { xs: "18px" },
								}}
							>
								Because alcohol use can affect your health and can interfere with
								certain medications and treatments, it is important that we ask some
								questions about your use of alcohol. Your answers will remain
								confidential so please be honest.
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
								onClick={() => dispatch(showTool2page())}
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
