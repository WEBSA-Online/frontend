import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioWithmark";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "If not at university whom do you commonly stay with?",
	options: [
		{ name: "Parents/Guardians", value: "Parents/Guardians" },
		{
			name: "Alone",
			value: "Alone",
		},
		{ name: "Spouse/partner", value: "Spouse/partner" },
		{ name: "N/A", value: "N/A" },
	],
	direction: "row",
};

const Page7 = () => {
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

export default Page7;
