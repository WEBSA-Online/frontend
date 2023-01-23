import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Alert, CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../API";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

export default function Register() {
	const toolOneComplete = useSelector((state) => state.steps.toolOneComplete);
	const savedResponse = useSelector((state) => state.steps.toolOneComplete);
	const navigate = useNavigate();
	const [email, setEmail] = React.useState("");
	const [passwordOne, setPasswordOne] = React.useState("");
	const [passwordTwo, setPasswordTwo] = React.useState("");
	const [success, setSuccess] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(false);
	const [errorMsg, setErrorMsg] = React.useState(false);

	console.log(savedResponse[1].answer);

	const handleSubmit = async () => {
		setLoading(true);
		setError(false);
		
		if ((savedResponse[1].answer === undefined)) {
			setLoading(false);
			setError(true);
			setErrorMsg("Name not captured you need to complete 1st screening.");
		} else if (passwordOne !== passwordTwo) {
			setLoading(false);
			setError(true);
			setErrorMsg("Passwords dont match.");
		} else {
			try {
				await axios.post(`${API_URL}/register`, {
					name: savedResponse[1].answer,
					email: email,
					password: passwordOne,
				});
				setLoading(false);
				setSuccess(true);
				setTimeout(() => {
					navigate("/login");
				}, 2000);
			} catch (err) {
				console.log(err);
				setLoading(false);
				setError(true);
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
						You've Successfully registered
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
						width: "400px",
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
							label="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							margin="normal"
							fullWidth
							label="Create Password"
							type="password"
							onChange={(e) => setPasswordOne(e.target.value)}
						/>
						<TextField
							margin="normal"
							fullWidth
							label="Confirm Password"
							type="password"
							onChange={(e) => setPasswordTwo(e.target.value)}
						/>
						<Button
							sx={{
								marginTop: "10px",
								backgroundColor: "#006266",
								fontWeight: 700,
								"&:hover": { backgroundColor: "#005356" },
							}}
							size="large"
							fullWidth="true"
							variant="contained"
							onClick={handleSubmit}
						>
							{loading ? (
								<CircularProgress size={30} sx={{ color: "white" }} />
							) : (
								"REGISER TO PROCEED"
							)}
						</Button>
					</>
				</Box>
			</>
		</div>
	);
}
