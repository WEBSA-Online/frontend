import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "Accommodation",
	options: [
		{ name: "I am in a hall of residence", value: "hall of residence" },
		{
			name: "I am in a private hostel",
			value: "private hostel",
		},
		{ name: "I stay home", value: "home" },
	],
	direction: "row",
};

const Page7 = () => {
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
			<RadioOptions details={details} />
		</Container>
	);
};

export default Page7;
