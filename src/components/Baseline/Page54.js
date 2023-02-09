
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "Do you have a brother or sister who has a history of problematic alcohol or drug use?",
	options: [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },
	],
	direction: "row",
};

const Page54 = () => {
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

export default Page54;
