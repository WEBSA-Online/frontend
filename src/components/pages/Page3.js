import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import DatePicker from "../utils/DatePicker";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "Your Birthday is",
};

const Page3 = () => {
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
			<DatePicker />
		</Container>
	);
};

export default Page3;
