import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "What is your Martial Status?",
	options: [
		{ name: "Single", value: "Single" },
		{ name: "Cohabiting", value: "Cohabiting" },
		{ name: "Married", value: "Married" },
		{ name: "Other", value: "Other" },
	],
	direction: "row",
};

const Page4 = () => {
	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			<Stack spacing={2}>
				<h1 className="heading1">{details.question}</h1>
			</Stack>
			<RadioOptions details={details} />
		</Container>
	);
};

export default Page4;
