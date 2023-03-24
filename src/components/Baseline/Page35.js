import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";
import { useSelector } from "react-redux";
import TextField from "../utils/TextField";
import React from "react";

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

const details2 = {
	question: "Specify your religion below",
};

const Page32 = () => {
	const [conditionals, setContional] = React.useState("");

	console.log(conditionals);
	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			{conditionals === "Other specify" ? (
				<>
					<h1 style={{ lineHeight: "38px" }}>{details2.question}</h1>
					<TextField details={details2} />
				</>
			) : (
				<>
					<h1 style={{ lineHeight: "38px" }}>{details.question}</h1>
					<RadioOptions details={details} grid={12} setContional={setContional} />
				</>
			)}
		</Container>
	);
};

export default Page32;
