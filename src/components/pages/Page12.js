import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question: "How often do you have six or more drinks on one occasion?",
	options: [
		{ name: "Never", score: 0 },
		{ name: "Less than a month", score: 1 },
		{ name: "Monthly", score: 2 },
		{ name: "Weekly", score: 3 },
		{ name: "Daily or almost daily", score: 4 },
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
