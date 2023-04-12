import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question:
		"How many times do you take drugs on a typical day when you use drugs?",
	options: [
		{ name: "0 times a month", score: 0 },
		{ name: "1-2 times a month", score: 1 },
		{ name: "3-4 times a month", score: 2 },
		{ name: "5-6 times a week", score: 3 },
		{ name: "7 times a week or more", score: 4 },
	],
	objective: "Frequency per day",
};

const Page23 = () => {
	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			<h1 style={{ lineHeight: "38px" }}>{details.question}</h1>
			<RadioOptions details={details} />
		</Container>
	);
};

export default Page23;
