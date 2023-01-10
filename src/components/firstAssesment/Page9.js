import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import TextField from "../utils/TextField";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "Enter your email address",
};

const Page9 = () => {
	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			<Stack spacing={2}>
				<h1>{details.question}</h1>
			</Stack>
			<TextField details={details} />
		</Container>
	);
};

export default Page9;
