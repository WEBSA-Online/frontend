
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question: "Arm on study",
	options: [
		{ name: "On Control Arm", value: "On Control Arm" },
		{ name: "On Intervention Arm", value: "On Intervention Arm" },
	],
	direction: "row",
};

const Page39 = () => {
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

export default Page39;
