
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "What is your gender? ",
	options: [
		{ name: "Male", value: "male" },
		{ name: "Female", value: "female" },
	],
	direction: "row",
};

const Page2 = () => {
	return (
		<Container
			fixed
			sx={{
				paddingTop: "5%",
			}}
		>
			<h1 style={{ lineHeight: "38px" }}>{details.question}</h1>
			<RadioOptions details={details} />
		</Container>
	);
};

export default Page2;
