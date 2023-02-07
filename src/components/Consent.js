import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Stack, Button, Box } from "@mui/material";
import * as React from "react";
import ConsentOptions from "./utils/ConsentRadioOption"
import { useNavigate } from "react-router-dom";

const Page = () => {

	const [consent, setConsent] = React.useState("")
	const [selected, setSelected] = React.useState(false);
	const navigate = useNavigate();

	const details = {
		options: [{ name: "I consent" }, { name: "I don't consent" }],
		direction: "column",
	};

	const submit = () => {
		navigate("/register");
	};

	const backtohome = () => {
		localStorage.clear();
		navigate("https://websaonline.com");
	};
	
	return (
		<Box
			sx={{
				padding: "0 5%",
				backgroundColor: "#093095",
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{selected ? (
				<Grid container>
					<Grid sm={12} md={12}>
						<Stack sx={{ alignItems: "center" }} spacing={3}>
							{consent === "I consent" ? (
								<>
									<Typography variant="h4" sx={{ color: "white" }}>
										Thank you! Proceed to the next stage
									</Typography>
									<Button
										variant="contained"
										size="large"
										sx={{
											backgroundColor: "#fff",
											color: "#093095",
											fontWeight: "bold",
											"&:hover": { color: "#fff", backgroundColor: "#093095" },
										}}
										onClick={submit}
									>
										Continue
									</Button>
								</>
							) : (
								<>
									<Typography variant="h4" sx={{ color: "white" }}>
										Thank you for participating.
									</Typography>
									<a
										style={{textDecoration: "none" }}
										href="https://websaonline.com/consent"
									>
										<Button
											variant="contained"
											size="large"
											sx={{
												backgroundColor: "#fff",
												color: "#093095",
												fontWeight: "bold",
												"&:hover": { color: "#fff", backgroundColor: "#093095" },
											}}
										>
											Continue
										</Button>
									</a>
								</>
							)}
						</Stack>
					</Grid>
				</Grid>
			) : (
				<Grid container>
					<Grid xs={12} md={12}>
						<Stack sx={{ alignItems: "center" }} spacing={1}>
							{/* <FontAwesomeIcon
							icon={faTrophy}
							style={{ color: "yellow", fontSize: "60px" }}
						/> */}
							{/* <Typography variant="h6" sx={{ color: "white" }}>
							This study has been approved by Makerere University School of Public
							Health Research Ethics Committee (MakREC) and National council of science
							and technology (UNCST).
						</Typography> */}
							<Typography variant="h4" sx={{ color: "white" }}>
								Statement of Consent
							</Typography>
							<Typography variant="h6" sx={{ color: "white" }}>
								I believe the{" "}
								<a
									style={{ color: "yellow", textDecoration: "none" }}
									href="https://websaonline.com/consent"
									target="_blank"
									rel="noreferrer"
								>
									consent page
								</a>{" "}
								has described to me what is going to be done, the risks, the benefits
								involved and my rights regarding this study. I understand that my
								decision to participate in this study will not alter my usual medical
								care. In the use of this information, my identity will be concealed. I
								am aware that I may withdraw at anytime. I understand that by signing
								this form, I do not waive any of my legal rights but merely indicate
								that I have been informed about the research study in which I am
								voluntarily agreeing to participate. A copy of this form will be
								provided to me.
							</Typography>
						</Stack>
						<Stack spacing={2} sx={{ marginTop: "20px" }}>
							<Typography variant="h6" sx={{ color: "white" }}>
								Read the{" "}
								<a
									style={{ color: "yellow", textDecoration: "none" }}
									href="https://websaonline.com/consent"
									target="_blank"
									rel="noreferrer"
								>
									consent page
								</a>{" "}
							</Typography>
							<ConsentOptions
								details={details}
								setConsent={setConsent}
								setSelected={setSelected}
							/>
						</Stack>
					</Grid>
				</Grid>
			)}
		</Box>
	);
};

export default Page;
