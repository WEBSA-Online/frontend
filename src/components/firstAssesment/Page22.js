import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question: "Do you use more than one type of drug on the same occasion?",
	options: [
		{ name: "Never", score: 0 },
		{ name: "Once a month or less often", score: 1 },
		{ name: "2-4 times a month", score: 2 },
		{ name: "2-3 times a week", score: 3 },
		{ name: "4 or more times a week", score: 4 },
	],
	objective: "Poly drug use",
};

const Page22 = () => {
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

export default Page22;
