import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question:
		"Do you have a friend who engages in risky alcohol or other drug use?",
	options: [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },
	],
	direction: "row",
};

const Page55 = () => {
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

export default Page55;
