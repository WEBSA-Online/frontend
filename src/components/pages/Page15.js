import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question:
		"Over the last month, how often have stomach aches, headaches, or other pains prevented you from attending classes?",
	options: [
		{ name: "Not at all", value: "Not at all" },
		{ name: "Several days ", value: "Several days " },
		{ name: "More than half the days", value: "More than half the days" },
		{ name: "Nearly everyday ", value: "Nearly everyday" },
	],
	direction: "row",
};

const Page15 = () => {
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

export default Page15;
