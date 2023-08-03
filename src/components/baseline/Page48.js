import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question: "What's your Gender?",
	options: [
		{ name: "Male", value: "Man" },
		{ name: "Female", value: "Woman" },
	],
	direction: "row",
};

const Page48 = () => {
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

export default Page48;
