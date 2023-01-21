
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "Accommodation during University semester time? ",
	options: [
		{ name: "Hall of residence owned/administered by university", value: "Hall of residence owned/administered by university" },
		{ name: "Private Hostel", value: "Private Hostel" },
            { name: "Reside at home", value: "Reside at home" },
            { name: "Other specify", value: "Other specify" },
	],
	direction: "row",
};

const Page33 = () => {
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

export default Page33;
