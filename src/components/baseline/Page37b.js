import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";
import { useSelector } from "react-redux";
import TextField from "../utils/TextField";

const details = {
	question: "Type of residence?",
	options: [
		{ name: "Rural", value: "Rural" },
		{ name: "Urban", value: "Urban" },
	],
	direction: "row",
};

const details2 = {
	question: "Specify your religion below",
};

const Page32 = () => {
	const savedResponse = useSelector((state) => state.steps.responses);
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

export default Page32;
