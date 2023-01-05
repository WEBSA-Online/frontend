import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioWithmark";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "What is the name of the University that you are attending? ",
	options: [
		{ name: "Makerere University", value: "Makerere University" },
		{
			name: "Makerere University Business School",
			value: "Makerere University Business School",
		},
		{
			name: "Kyambogo University",
			value: "Kyambogo University",
		},
		{
			name: "Uganda Martyrs University Nkozi",
			value: "Uganda Martyrs University Nkozi",
		},
	],
	options2: [
		{
			name: "Kampala International University",
			value: "Kampala International University",
		},
		{
			name: "Uganda Christine University",
			value: "Uganda Christine University",
		},
		{
			name: "Ndejje University",
			value: "Ndejje University",
		},
		{
			name: "Others",
			value: "Others",
		},
	],
	direction: "row",
};

const Page5 = () => {
	return (
		<Box
			sx={{
				background: "#e9f1f2",
				display: "flex",
				height: "100vh",
				paddingTop: "5%",
			}}
			className="scroll"
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

export default Page5;
