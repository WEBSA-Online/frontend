import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Stack } from '@mui/material';
import Student from "../../images/websa-online.jpg"
import { Link } from 'react-router-dom';

function Landing() {
  return (
			<Grid
				container
				spacing={0}
				columnSpacing={0}
				className="bg-gradient-to-r from-light-blue via-middle-green to-light-green"
			>
				<Grid xs={12} sm={6}>
					<Stack spacing={3} className="text-white py-10 px-8 ">
						<h1 className="font-websa-bold text-3xl">Welcome to the Websa App</h1>
						{/* <p className="mt-4">
							Thanks so much for accepting to take part in this study. This is a free
							app designed to reduce alcohol and drug abuse among young university
							students aged 18-24. It has tabs for explaining what you are expected to
							do (TRY IT), frequently asked questions (FAQ), resources (materials to
							read), our team and contacts. To proceed to other tabs you need a
							password. The password should not be shared with anybody as its meant to
							protect your privacy.
						</p> */}
						<p className="mt-4">
							Thanks so much for accepting to take part in this study. This is a free
							app designed to reduce alcohol and drug abuse among young university
							students aged 18-24. It has tabs for explaining the importance of the
							study, frequently asked questions (FAQ), resources (materials to read),
							our team contacts. To proceed, you need to take the initial assessement. Your password should not be shared with anybody as its meant to protect your
							privacy.
						</p>
						<Link to="/screening">
							<button className="font-websa-bold transition-all bg-websa-red hover:bg-white hover:text-websa-green p-2.5 rounded shadow-sm text-white font-bold text-lg w-[60%] md:w-[40%]">
								Start Assessment
							</button>
						</Link>
					</Stack>
				</Grid>
				<Grid xs={12} sm={6} className="">
					<img src={Student} alt="Student" className="md:max-w-[100%]" />
				</Grid>
			</Grid>
		);
}

export default Landing