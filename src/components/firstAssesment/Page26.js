import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question:
		"Has it happened, over the past year that you have not been able to stop taking drugs?",
	options: [
		{ name: "Never", score: 0 },
		{ name: "Less than often/once a month", score: 1 },
		{ name: "Every month", score: 2 },
		{ name: "Every week", score: 3 },
		{ name: "Daily or almost", score: 4 },
	],
	objective: "Loss of control",
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
