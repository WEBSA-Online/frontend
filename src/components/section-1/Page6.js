import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioWithmark";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "Where do you stay during the university semester?",
	options: [
		{ name: "Reside in university hall", value: "Reside in university hall" },
		{
			name: "Reside in a non-university hall",
			value: "Reside in a non-university hall",
		},
		{ name: "Non-resident (stay at home)", value: "Non-resident (stay at home)" },
	],
	direction: "row",
};

const Page6 = () => {
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

export default Page6;
