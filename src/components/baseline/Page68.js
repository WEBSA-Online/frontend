
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "In the last 30 days, have you experienced: Thinking about taking your life, ",
	options: [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },

	

	],
	direction: "row",
};

const Page68 = () => {
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

export default Page68;
