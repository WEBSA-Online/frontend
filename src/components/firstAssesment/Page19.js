import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question: "Have you or someone else been injured because of your drinking?",
	options: [
		{ name: "No", score: 0 },
		{ name: "Yes but not in the last year", score: 2 },
		{ name: "Yes during the last year", score: 4 },
	],
};

const Page19 = () => {
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

export default Page19;
