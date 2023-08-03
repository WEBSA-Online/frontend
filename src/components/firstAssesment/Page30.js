import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question:
		"Have you or anyone else been mentally/physically hurt because you used drugs?",
	options: [
		{ name: "No", score: 0 },
		{ name: "Yes, but not over the last year", score: 2 },
		{ name: "Yes, over the last year", score: 4 },
	],
	objective: "Harmful use",
};

const Page = () => {
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

export default Page;
