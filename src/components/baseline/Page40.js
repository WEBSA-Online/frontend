import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question: "Academic progression on the degree program",
	options: [
		{ name: "Normal", value: "Normal" },
		{ name: "Not Normal(there are retakes)", value: "Not Normal" },
	],
	direction: "row",
};

const Page40 = () => {
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

export default Page40;
