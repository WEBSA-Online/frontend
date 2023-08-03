import { Button, Box, Stack } from "@mui/material";
import React from "react";

export default function Timer() {


	const handleClick=()=>{
		window.location.reload();
	}
	
	return (
		<Stack className="scroll" sx={{padding:"10% 0 0 0"}} spacing={2}>
			<h2 className="text-2xl">Thank you for accepting to take this assessment. Please note;</h2>
			<ol>
				<li>
					You must have identification information: Name, Sex, Age, marital status,
					university, student number, hall of residence.
				</li>
				<li>You will be asked to give a username, email and password</li>
				<li>
					The second part of this assesment has the AUDIT for alcohol and DUDIT for
					drugs
				</li>
				<li>
					You will be refunded with an internet bundle worth<strong> 500MBs.</strong>
				</li>
			</ol>
			<Box className="timer-wrapper">
				<Button
					variant="contained"
					color="primary"
					size="large"
					onClick={handleClick}
				>
					Continue
				</Button>
			</Box>
		</Stack>
	);
}
