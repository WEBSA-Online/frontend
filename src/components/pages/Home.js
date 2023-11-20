import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../lottie/waving-hand.json";


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
				{/* <div className="bg-slate-200 p-6 rounded-t-lg">
					<p className="font-medium text-lg">We're glad you are here.</p>
				</div> */}
				<div className="bg-white p-6 rounded-t-lg">
					<p className="font-medium text-base">
						Thank you for taking the first step towards by completing the screening.
						Your willingness to participate in this process shows that you are
						committed to making positive changes in your life. We encourage you to
						take a step further and complete the motivational steps to help you keep
						track your progress.
					</p>
					<Link to="/dashboard/motivational-interviewing">
						<button className="mt-3 button-small w-full sm:w-[15%]">
							Motivate me
						</button>
					</Link>
					<p className="mt-3 font-medium text-base">
						If you have any questions or concerns. We're here to help you every step
						of the way, and we believe that with the right support and guidance, you
						can overcome addiction and build a healthier, happier life.
					</p>
					<Link to="/dashboard/contacts">
						<button className="mt-3 button-small w-full sm:w-[15%]">
							Chat with a counsellor
						</button>
					</Link>
				</div>
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
