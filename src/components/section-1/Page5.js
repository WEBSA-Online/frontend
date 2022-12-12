import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioWithmark";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "What is your year of study?",
	options: [
		{ name: "1=First", value: "1=First" },
		{ name: "2=Second", value: "2=Second" },
		{ name: "3=Third", value: "3=Third" },
		{ name: "4=4-5th", value: "4=4-5th Forth or Fifth" },
	],
	direction: "row",
};

const Page5 = () => {
	return (
		<Box
			sx={{
				background: "#e9f1f2",
				display: "flex",
				height: "100vh",
				paddingTop: "10%",
			}}
		>
			<Container fixed>
				<Stack spacing={2}>
					<h1>{details.question}</h1>
				</Stack>
				<RadioOptions details={details} />
			</Container>
		</Box>
	);
};

export default Page5;
