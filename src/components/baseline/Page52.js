import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import TextField from "../utils/TextField";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "In the last 30 days, what is the number of times you went home drunk?",
};

const Page52 = () => {
	return (
		<Box
			sx={{
				display: "flex",
				height: "100vh",
				paddingTop: "10%",
			}}
		>
			<Container fixed>
				<Stack spacing={2}>
					<h1>{details.question}</h1>
				</Stack>
				<TextField details={details} />
			</Container>
		</Box>
	);
};

export default Page52;
