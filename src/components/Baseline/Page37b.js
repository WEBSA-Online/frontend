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
			{!savedResponse[3] ? (
				<>
					<h1 style={{ lineHeight: "38px" }}>{details.question}</h1>
					<RadioOptions details={details} grid={12} />
				</>
			) : (
				<>
					<h1 style={{ lineHeight: "38px" }}>{details2.question}</h1>
					<TextField details={details2} />
				</>
			)}
		</Container>
	);
};

export default Page32;
