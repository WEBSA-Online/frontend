import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Alert, CircularProgress, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../API";
import { useDispatch } from "react-redux";
import {
	updateToken,
	getUserDetails,
	getTimeOfLogin,
} from "../redux/slices/authSlice";
import { resetResponses, resetStep } from "../redux/slices/stepSlice";
import Logo from "../images/websa-logo-updated.png";

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

	if (isPageLoaded) {
		dispatch(resetResponses());
		dispatch(resetStep(0));
	}

	const handleSubmit = async () => {
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
			console.log(reponse2.data.role)
			if(reponse2.data.role === "admin") {
				setTimeout(() => {
					navigate("/allusers");
				}, 2000);
			} else if (reponse2.data.role === "counsellor") {
				setTimeout(() => {
					navigate("/counsellors");
				}, 2000);
			}else {
				setTimeout(() => {
					navigate("/dashboard");
				}, 2000);
			}
			
		} catch (err) {
			console.log(err.message);
			setLoading(false);
			setError(true);
			if (err.message === "Network Error") {
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
					<Stack spacing={2}>
						<span style={{ display: "flex", justifyContent: "center" }}>
							<img src={Logo} alt="websa-logo" sx={{ margin: "0 auto" }} />
						</span>
						<input
							className={`appearance-none  ${
								error === true ? `border-2 border-red-600` : `border border-gray-500`
							} rounded w-full py-4 px-3 font-websa-regular text-black text-sm focus:outline-none focus:border-2 focus:border-emerald-500`}
							placeholder="ENTER EMAIL ADDRESS"
							type="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className={`appearance-none  ${
								error === true ? `border-2 border-red-600` : `border border-gray-500`
							}  rounded w-full py-4 px-3 font-websa-regular text-black text-sm focus:outline-none focus:border-2 focus:border-emerald-500`}
							placeholder="ENTER PASSWORD"
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
						<div className="flex justify-between">
							<Link to="/lost-password">
								<span className="text-black">Forgot password?</span>
							</Link>
							<Link to="/screening">
								<span className="text-black">Sign Up</span>
							</Link>
						</div>
					</Stack>
				</Box>
			</>
		</div>
	);
}
