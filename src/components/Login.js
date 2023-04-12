import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Alert, CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../API";
import { useDispatch } from "react-redux";
import {
	updateToken,
	getUserDetails,
	getTimeOfLogin,
} from "../redux/slices/authSlice";
import { resetResponses } from "../redux/slices/stepSlice";



export default function Register() {
	const navigate = useNavigate();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [success, setSuccess] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(false);
	const [errorMsg, setErrorMsg] = React.useState(false);
	const dispatch = useDispatch();
	const [isPageLoaded, setIsPageLoaded] = React.useState(false);

	React.useEffect(() => {
		setIsPageLoaded(true);	
	}, []);

	if(isPageLoaded) {
		localStorage.clear();
	}	

	const handleSubmit = async () => {
		dispatch(resetResponses());
		setLoading(true);
		setError(false);
		try {
			const response = await axios.post(`${API_URL}/login`, {
				email: email,
				password: password,
			});
			dispatch(updateToken(response.data.accessToken));
			const reponse2 = await axios.get(`${API_URL}/users/${email}`);
			dispatch(getUserDetails(reponse2.data));
			dispatch(getTimeOfLogin(Date.now()));
			setLoading(false);
			setSuccess(true);
			setTimeout(() => {
				navigate("/");
			}, 2000);
		} catch (err) {
			console.log(err.message);
			setLoading(false);
			setError(true);
			if (err.message==="Network Error") {
				setErrorMsg("Connection failed");
			} else {
				setErrorMsg(err.response.data.message);
			} 			
		}
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				backgroundColor: "#f4f6f7",
				flexDirection: "column",
			}}
		>
			<>
				{success ? (
					<Alert variant="filled" severity="success" sx={{ marginBottom: "10px" }}>
						You've Successfully logged in
					</Alert>
				) : error ? (
					<Alert
						variant="filled"
						severity="error"
						onClose={() => setError(false)}
						sx={{ marginBottom: "10px" }}
					>
						{errorMsg}
					</Alert>
				) : null}
				<Box
					sx={{
						width: { xs: "80%", sm: "30%", md: "30%" },
						maxWidth: "100%",
						padding: "40px 30px",
						backgroundColor: "white",
						borderRadius: "10px",
					}}
				>
					<>
						<span style={{ display: "flex", justifyContent: "center" }}>
							<img
								src="/images/websa-logo-updated.png"
								alt="ucc-logo"
								sx={{ margin: "0 auto" }}
							/>
						</span>
						<TextField
							margin="normal"
							fullWidth
							label="Enter Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							margin="normal"
							fullWidth
							label="Enter Password"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Button
							sx={{
								marginTop: "10px",
								backgroundColor: "#00a551",
								fontWeight: 700,
								"&:hover": { backgroundColor: "#00a554" },
							}}
							size="large"
							fullWidth="true"
							variant="contained"
							onClick={handleSubmit}
						>
							{loading ? (
								<CircularProgress size={30} sx={{ color: "white" }} />
							) : (
								"LOGIN"
							)}
						</Button>
					</>
				</Box>
			</>
		</div>
	);
}
