
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "How often do you use internet(say for news, source of reading materials, social media or more)",
	options: [
		{ name: "Every hour", value: "Every hour" },
		{ name: "Every 2-3 hours", value: "Every 2-3 hours" },
		{ name: "Every 4-6 hours", value: "Every 4-6 hours" },
		{ name: "7+hours", value: "7+hours" },
	],
	direction: "row",
};

const Page38 = () => {
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

export default Page38;
