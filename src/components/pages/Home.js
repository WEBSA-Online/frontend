import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export default function Home() {
  const userDetails = useSelector((state) => state.auth.userDetails);

  return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				{userDetails.selection === "control" ? (
					<Box sx={{width:"70%"}}>
						<h3>Dear {userDetails.name}</h3>
						<h4>
							Please visit your university counsellor for help. You will be requested to take a
							follow up evaluation after one month. Our study team will be following
							up with you
						</h4>

						<h4 style={{ fontFamily: "Poppins-Regular" }}>
							Thank you for taking the assesment.
						</h4>
					</Box>
				) : (
					<>
						<h2>Hi {userDetails.name}, You are welcome</h2>
						<h3>Thank you for completing the 1st phase of the assessment</h3>
						<h4 style={{ fontFamily: "Poppins-Regular" }}>
							We've got you covered! You can access more resources{" "}
							<Link style={{ color: "red" }} to="/resources">
								here
							</Link>
						</h4>
					</>
				)}
			</div>
		);
}
