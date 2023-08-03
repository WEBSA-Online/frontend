import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";
import React from "react";
import TextField from "../utils/TextField";

const details = {
	question:
		"Who pays your fees (tuition, accommodation, functional and others)?",
	options: [
		{
			name: "Self sponsored (self, parents, donor)",
			value: "Self sponsored (self, parents, donor)",
		},
		{ name: "Government sponsored", value: "Government sponsored" },
		{
			name:
				"Both Government and self-sponsored (some fees paid by govt and others by self)",
			value:
				"Both Government and self-sponsored (some fees paid by govt and others by self)",
		},
		{ name: "Other specify", value: "Other specify" },
	],
	direction: "row",
};

const details2 = {
	question: "Specify your other source of paying tuition",
};

const Page34 = () => {
	const [conditionals, setContional] = React.useState("");

	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			{conditionals === "Other specify" ? (
				<>
					<h1 className="heading1">{details2.question}</h1>
					<TextField details={details} />
				</>
			) : (
				<>
					<h1 className="heading1">{details.question}</h1>
					<RadioOptions details={details} grid={12} setContional={setContional} />
				</>
			)}
		</Container>
	);
};

export default Page34;
