import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Picker from "../utils/ValuePicker";
import Stack from "@mui/material/Stack";

const details = {
	question:
		"On average, how much screen time do you have a day not counting SCHOOL or WORK?",
	options: ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
	direction: "row",
};

const Page14 = () => {
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
					<h1>I sleep</h1>
					<Picker details={details} />
					<h1>hours, on an average night</h1>
				</Stack>
			</Container>
		</Box>
	);
};

export default Page14;
