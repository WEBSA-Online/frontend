
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "Whats your Gender?",
	options: [
		{ name: "Man", value: "1" },
		{ name: "Woman", value: "2" },
		{ name: "2-4 times a month", value: "2" },
	

	],
	direction: "row",
};

const Page48 = () => {
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

export default Page48;
