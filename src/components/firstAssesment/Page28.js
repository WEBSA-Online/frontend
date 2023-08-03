import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question:
		"How often over the past year have you needed to take a drug the morning after heavy drug use the day before?",
	options: [
		{ name: "Never", score: 0 },
		{ name: "Less than often/once a month", score: 1 },
		{ name: "Every month", score: 2 },
		{ name: "Every week", score: 3 },
		{ name: "Daily or almost", score: 4 },
	],
	objective: "Eye opener or Hair of the dog",
};

const Page = () => {
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

export default Page;
