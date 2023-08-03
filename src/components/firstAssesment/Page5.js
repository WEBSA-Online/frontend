import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";
import Stack from "@mui/material/Stack";

const details = {
	question: "What is the name of the University that you are attending? ",
	options: [
		{ name: "Makerere University", value: "Makerere University" },
		{
			name: "Kyambogo University",
			value: "Kyambogo University",
		},
		{
			name: "Uganda Martyrs University Nkozi",
			value: "Uganda Martyrs University Nkozi",
		},
		{
			name: "Kampala International University",
			value: "Kampala International University",
		},
		{
			name: "Uganda Christian University",
			value: "Uganda Christian University",
		},
		{
			name: "Ndejje University",
			value: "Ndejje University",
		},
		{
			name: "Makerere University Business School",
			value: "Makerere University Business School",
		},
	],
};

const Page5 = () => {
	return (
		<Box
			sx={{
				display: "flex",
				paddingTop: "5%",
			}}
		>
			<Container fixed>
				<Stack spacing={2}>
					<h1 className="heading1">{details.question}</h1>
				</Stack>
				<RadioOptions details={details} />
			</Container>
		</Box>
	);
};

export default Page5;
