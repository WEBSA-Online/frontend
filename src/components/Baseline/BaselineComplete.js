import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Unstable_Grid2";
import {
	Typography,
	Stack,
	Container,
	Button,
	CircularProgress,
	Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import { API_URL } from "../../API";

const BaselineComplete = () => {
	const savedResponse = useSelector((state) => state.steps.responses);
	const page = useSelector((state) => state.steps.activeStep);
	const userDetails = useSelector((state) => state.auth.userDetails);
	const navigate = useNavigate();
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState({status:false, msg:""});
	
	const submit = async () => {
		setLoading(true);
		try {
			await axios.put(`${API_URL}/users/${userDetails.email}`, {
				isBaselineComplete: true,
				baselineData: savedResponse,
			});
			localStorage.clear();
			navigate("/");
		} catch (err) {
			setLoading(false);
			setError({status:true, msg:`${err.message}`})
			console.log(err);
		}
	};

	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			<Grid container>
				<Grid sm={12} md={12}>
					<Stack sx={{ alignItems: "center" }} spacing={3}>
						{error.status === true && (
							<Alert
								variant="filled"
								severity="error"
								sx={{ marginBottom: "10px" }}
								onClose={() => setError(false)}
							>
								{error.msg}
							</Alert>
						)}
						<FontAwesomeIcon
							icon={faTrophy}
							style={{ color: "yellow", fontSize: "80px" }}
						/>
						<Typography variant="h5" sx={{ color: "white" }}>
							Thanks for participating in the Baseline Screening.
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
							onClick={submit}
						>
							{loading ? (
								<CircularProgress size={30} sx={{ color: "white" }} />
							) : (
								"Continue"
							)}
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default BaselineComplete;
