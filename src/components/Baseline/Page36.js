
import Container from "@mui/material/Container";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";


const details = {
	question: "District of previous residence if applicable? ",
	options: [
		{ name: "District  in Uganda ", value: "District  in Uganda " },
		{ name: "country if not Ugandan", value: "country if not Ugandan" },

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

export default Page36;
