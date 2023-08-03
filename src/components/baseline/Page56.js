import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question:
		"Have you failed to sit for an exam or continuous assessment or hand in a course work in the last 30 days  due to alcohol/drug use?",
	options: [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },
	],
	direction: "row",
};

const Page56 = () => {
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

export default Page56;
