import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioWithmark";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "Have you ever been hospitalized with a medical problem?",
	options: [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },
	],
	direction: "column",
};

const Page16 = () => {
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

export default Page16;
