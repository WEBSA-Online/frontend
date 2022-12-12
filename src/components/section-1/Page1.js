import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioWithmark";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "How comfortable are you reading and understanding English? ",
	options: [
		{ name: "Very comfortable ", value: "Very comfortable" },
		{ name: "Comfortable", value: "Comfortable" },
		{ name: "Somewhat comfortable", value: "Somewhat comfortable" },
		{ name: "Not at all comfortable", value: "Not at all comfortable" },
	],
	direction: "row",
};

const Page1 = () => {
	return (
		<Box
			sx={{
				background: "#e9f1f2",
				display: "flex",
				height: "100vh",
            paddingTop:"10%"
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

export default Page1;
