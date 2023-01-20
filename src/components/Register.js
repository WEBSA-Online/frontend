import React from "react";
import TextField from "@mui/material/TextField";
import {Box, Alert} from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();

	const [email, setEmail] = React.useState("");
	const [passwordOne, setPasswordOne] = React.useState("");
	const [passwordTwo, setPasswordTwo] = React.useState("");
   const [success, setSuccess] = React.useState(false);
   const [loading, setLoading] = React.useState(false);
   const [error, setError] = React.useState(false);

	React.useEffect(() => {
      if(passwordOne!==passwordTwo){
         setError("")
      }
   }, [passwordOne, passwordTwo]);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				backgroundColor: "#f4f6f7",
			}}
		>
			<>
				<Alert
					variant="filled"
					severity="error"
					onClose={() => setError(false)}
					sx={{ marginBottom: "10px" }}
				>
					{error}
				</Alert>
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
							label="Password"
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
								backgroundColor: "darkblue",
								fontWetight: "700px",
								"&:hover": { backgroundColor: "blue" },
							}}
							size="large"
							fullWidth="true"
							variant="contained"
							onClick={() => navigate("/login")}
						>
							REGISER TO PROCEED
						</Button>
					</>
				</Box>
			</>
		</div>
	);
}
