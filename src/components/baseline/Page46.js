import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question: "How often have you used the primary drug in last week?",
	options: [
		{ name: "Never", value: "0" },
		{ name: "Only once", value: "1" },
		{ name: "2-4 times", value: "2" },
		{ name: "4 times or more", value: "3" },
	],
	direction: "row",
};

const Page46 = () => {
	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			<h1 className="heading1">{details.question}</h1>
			<RadioOptions details={details} />
		</Container>
	);
};

export default Page46;
