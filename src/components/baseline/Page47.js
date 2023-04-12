
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "How about in the last 30 days ",
	options: [
		{ name: "Never", value: "0" },
		{ name: "Once a month", value: "1" },
		{ name: "2-4 times a month", value: "2" },
		{ name: "2-3 times  A week", value: "3" },
      { name: "4 times a week or more", value: "4" },

	],
	direction: "row",
};

const Page47 = () => {
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

export default Page47;
