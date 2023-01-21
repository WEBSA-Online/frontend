
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "Type of residence",
	options: [
		{ name: "Rural ", value: "Rural" },
		{ name: "Urban", value: "Urban" },

	],
	direction: "row",
};

const Page36 = () => {
	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			<h1 style={{ lineHeight: "38px" }}>{details.question}</h1>
			<RadioOptions details={details} />
		</Container>
	);
};

export default Page37;
