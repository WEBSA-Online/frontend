import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioWithmark";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "What religion do you belong?",
	options: [
		{ name: "Anglican", value: "Anglican" },
		{ name: "Moslem", value: "Moslem" },
		{ name: "Catholic", value: "Catholic" },
		{ name: "Pentecost", value: "Pentecost" },
		{ name: "None", value: "None" },
	],
	direction: "row",
};

const Page9 = () => {
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

export default Page9;
