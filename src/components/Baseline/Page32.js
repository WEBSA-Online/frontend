
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "What is your Religion? ",
	options: [
		{ name: "Catholic", value: "Catholic" },
		{ name: "Protestant", value: "Protestant" },
            { name: "Muslim", value: "Muslim" },
            { name: "Other specify", value: "Other specify" },
	],
	direction: "row",
};

const Page32 = () => {
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

export default Page32;
