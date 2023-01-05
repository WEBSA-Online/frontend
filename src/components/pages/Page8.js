import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioWithmark";
import "animate.css";
import Stack from "@mui/material/Stack";
import TextField from "../utils/TextField";
import { useSelector, useDispatch } from "react-redux";

const details = {
	question: "Name of hall or university managed accommodation?",
	question2: "Name of hostel",
	question3: "Name of village",
};

const Page8 = () => {
	const savedResponse = useSelector((state) => state.steps.responses);
	const previousResponse = savedResponse[7].answer;

	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			<Stack spacing={2}>
				<h1>
					{previousResponse === "hall of residence"
						? details.question
						: previousResponse === "private hostel"
						? details.question2
						: details.question3}
				</h1>
			</Stack>
			<TextField details={details} />
		</Container>
	);
};

export default Page8;
