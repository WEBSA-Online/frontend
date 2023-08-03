import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import TextField from "../utils/TextField";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "Enter student registration number",
};

const Page6 = () => {
	return (
		<Container fixed className="holder">
			<Stack spacing={2}>
				<h1 className="heading1">{details.question}</h1>
			</Stack>
			<TextField details={details} />
		</Container>
	);
};

export default Page6;
