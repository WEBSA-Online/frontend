import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioWithmark";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "Tribal Region",
	options: [
		{ name: "Eastern Region", value: "Eastern Region" },
		{ name: "Western Region", value: "Western Region" },
		{ name: "Northern Region", value: "Northern Region" },
		{ name: "Southern Region", value: "Southern Region" },
		{ name: "Central Region", value: "Central Region" },
	],
	direction: "row",
};

const Page8 = () => {
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

export default Page8;
