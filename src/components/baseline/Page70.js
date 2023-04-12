
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "In the last 30 days, have you experienced: Been involved in criminal violence (domestic, fights in bars or elsewhere)",
	options: [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },

	

	],
	direction: "row",
};

const Page70 = () => {
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

export default Page70;
