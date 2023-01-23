
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "Do you think there are adequate efforts by management in  your university to control access and use of alcohol and other drugs by students?",
	options: [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },

	

	],
	direction: "row",
};

const Page59 = () => {
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

export default Page59;
