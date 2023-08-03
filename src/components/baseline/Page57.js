import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question:
		"Has your academic performance been affected by alcohol/drug use? Compare last 30 days and previous month",
	options: [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },
	],
	direction: "row",
};

const Page57 = () => {
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

export default Page57;
