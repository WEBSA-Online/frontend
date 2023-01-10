import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question: "How many drinks containing alcohol do you have on a typical day when you are drinking?",
	options: [
		{ name: "1-2", score: 0 },
		{ name: "3-4", score: 1 },
		{ name: "5-6", score: 2 },
		{ name: "7-9", score: 3 },
		{ name: "10 or more", score: 4 },
	],
};

const Page12 = () => {
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

export default Page12;
