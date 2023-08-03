import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question:
		"How often during the last year have you failed to do what was normally expected of you because of drinking?",
	options: [
		{ name: "Never", score: 0 },
		{ name: "Less than a month", score: 1 },
		{ name: "Monthly", score: 2 },
		{ name: "Weekly", score: 3 },
		{ name: "Daily or almost daily", score: 4 },
	],
};

const Page14 = () => {
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

export default Page14;
