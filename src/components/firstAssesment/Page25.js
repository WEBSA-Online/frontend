import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question:
		"Over the past year, have you felt that your longing for drugs was so strong that you could not resist it?",
	options: [
		{ name: "Never", score: 0 },
		{ name: "Less than often/once a month", score: 1 },
		{ name: "Every month", score: 2 },
		{ name: "Every week", score: 3 },
		{ name: "Daily or almost", score: 4 },
	],
	objective: "Craving",
};

const Page = () => {
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

export default Page;
