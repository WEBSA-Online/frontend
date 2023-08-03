import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";
import { useSelector } from "react-redux";

const details = {
	question: "In the last 30 days, did you take 5 or more drinks at one time?",
	question2: "In the last 30 days, did you take 4 or more drinks at one time?",
	options: [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },
	],
	direction: "row",
};

const Page49 = () => {
	const savedResponse = useSelector((state) => state.steps.responses);
	const page = useSelector((state) => state.steps.activeStep);

	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			{savedResponse[page - 1].answer === "Male" ? (
				<h1 className="heading1">{details.question}</h1>
			) : (
				<h1 className="heading1">{details.question2}</h1>
			)}
			<RadioOptions details={details} />
		</Container>
	);
};

export default Page49;
