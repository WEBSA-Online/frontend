
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "Did you have a disciplinary issue related to alcohol/drug use with a lecturer or the institution in the last 30 days?",
	options: [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },

	

	],
	direction: "row",
};

const Page58 = () => {
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

export default Page58;
