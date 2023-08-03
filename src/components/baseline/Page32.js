import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question: "Your academic program year of study?",
	options: [
		{ name: "One", value: "One" },
		{ name: "Two", value: "Two" },
		{ name: "Three", value: "Three" },
		{ name: "Four", value: "Four" },
		{ name: "Five", value: "Five" },
	],
	direction: "row",
};

const Page32 = () => {
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

export default Page32;
