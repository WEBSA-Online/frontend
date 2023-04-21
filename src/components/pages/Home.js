import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../lottie/waving-hand.json";
import { pages } from "../Dashboard";

export default function Home() {
	const userDetails = useSelector((state) => state.auth.userDetails);

	const intervention = () => (
		<>
			<div className="flex items-center">
				<Lottie
					animationData={groovyWalkAnimation}
					loop={true}
					className="w-[10%] sm:w-[5%]"
				/>
				<h2 className="text-2xl text-white md:text-3xl">Hi {userDetails.name}</h2>
			</div>

			<div className="mt-6 divide-y">
				<div className="bg-slate-200 p-6 rounded-t-lg">
					<p className="font-medium text-lg">
						Thank you for completing the 1st phase of the assessment.
					</p>
				</div>
				{pages.slice(1).map((value)=>{
					return (
						<div className="bg-white p-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
							<p className="text-lg md:text-lg font-bold">
								{value.name}
							</p>
							<Link to={value.link}>
								<button className="mt-4 md:mt-0 button">Launch Here</button>
							</Link>
						</div>
					);
				})}
			</div>
		</>
	);

	const control = () => (
		<Box>
			<div className="flex items-center">
				<Lottie
					animationData={groovyWalkAnimation}
					loop={true}
					className="w-[10%] sm:w-[8%]"
				/>
				<h2 className="text-2xl text-white md:text-4xl">Hi {userDetails.name}</h2>
			</div>

			<div className="mt-6 divide-y">
				<div className="bg-slate-200 p-6 rounded-t-lg">
					<p className="font-medium text-xl text-center md:text-left">
						Thank you for taking the assessment.
					</p>
				</div>
				<div className="bg-white p-6 flex justify-between items-center divide-y">
					<p className="text-base md:text-xl font-bold">
						Please visit your university counsellor for help. You will be requested to
						take a follow up evaluation after one month. Our study team will be
						following up with you.
					</p>
				</div>
			</div>
		</Box>
	);

	return userDetails.selection === "control" ? control() : intervention();
}
