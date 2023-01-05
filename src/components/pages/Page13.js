import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioWithmark";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question:
		"On average, how much screen time do you have a day not counting SCHOOL or WORK?",
	options: [
		{ name: "1 hour or less", value: "1 hour or less" },
		{ name: "2 hours", value: "2 hours" },
		{ name: "3 to 4 hours", value: "3 to 4 hours" },
		{ name: "More than 4 hours", value: "More than 4 hours" },
	],
	direction: "row",
};

const Page13 = () => {
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

export default Page13;
