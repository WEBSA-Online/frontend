
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "Who pays your fees (tuition, accommodation, functional and others)?",
	options: [
		{ name: "Self sponsored (self, parents, donor)", value: "Self sponsored (self, parents, donor)" },
		{ name: "Government sponsored", value: "Government sponsored" },
            { name: "Both Government and self-sponsored (some fees paid by govt and others by self)", value: "Both Government and self-sponsored (some fees paid by govt and others by self)" },
            { name: "Other specify", value: "Other specify" },
	],
	direction: "row",
};

const Page34 = () => {
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

export default Page34;
