import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import DatePicker from "../utils/DatePicker";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "My Birthday is"
};

const Page1 = () => {
	return (
		<Box
			sx={{
				background: "#e9f1f2",
				display: "flex",
				height: "100vh",
				paddingTop: "5%",
			}}
		>
			<Container fixed>
				<Stack spacing={2}>
					<h1>{details.question}</h1>
				</Stack>
				<DatePicker />
			</Container>
		</Box>
	);
};

export default Page1;
