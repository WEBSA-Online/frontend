import Container from "@mui/material/Container";
import "animate.css";
import DatePicker from "../utils/DatePicker";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "What is Your Birthdate?",
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
				<h1 className="heading1">{details.question}</h1>
			</Stack>
			<DatePicker />
		</Container>
	);
};

export default Page3;
