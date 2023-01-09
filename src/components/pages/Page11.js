
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question: "How often do you have a drink containing alcohol ?",
	options: [
		{ name: "Never", value: "never", score: 0 },
		{ name: "Monthly or less", value: "Monthly or less", score: 1 },
		{ name: "2-4 times a month", value: "2-4 times a month", score: 2 },
		{ name: "2-3 times a week", value: "2-3 times a week", score: 3 },
		{ name: "4 or more times a week", value: "4 or more times a week", score: 4 },
	],
};

const Page11 = () => {
	return (
		<Container
			fixed
			sx={{
				paddingTop: "5%",
			}}
		>
			<h1 style={{ lineHeight: "38px" }}>{details.question}</h1>
			<RadioOptions details={details} />
		</Container>
	);
};

export default Page11;
