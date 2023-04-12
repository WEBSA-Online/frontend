
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "In the last 30 days, have you experienced: Feeling hopeless about the present or future, ",
	options: [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },

	

	],
	direction: "row",
};

const Page66 = () => {
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

export default Page66;
