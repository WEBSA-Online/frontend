import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question:
		"Has a relative, friend, doctor, or other health care worker been concerned about your drinking or suggested you cut down?",
	options: [
		{ name: "No", score: 0 },
		{ name: "Yes but not in the last year", score: 2 },
		{ name: "Yes during the last year", score: 4 },
	],
};

const Page20 = () => {
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

export default Page20;
