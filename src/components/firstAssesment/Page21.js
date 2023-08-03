import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question: "How often do you use drugs other than alcohol?",
	options: [
		{ name: "Never", score: 0 },
		{ name: "Once a month or less often", score: 1 },
		{ name: "2-4 times a month", score: 2 },
		{ name: "2-3 times a week", score: 3 },
		{ name: "4 or more times a week", score: 4 },
	],
	objective: "Frequency per week/month",
};

const Page21 = () => {
	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			<h1 className="heading1">{details.question}</h1>
			<RadioOptions details={details} />
		</Container>
	);
};

export default Page21;
