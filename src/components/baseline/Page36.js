import Container from "@mui/material/Container";
import "animate.css";
import TextField from "../utils/TextField";
import "animate.css";

const details = {
	question: "District of current residence? Country if not Ugandan",
};

const Page36 = () => {
	return (
		<Container
			fixed
			sx={{
				paddingTop: "10%",
			}}
		>
			<h1 className="heading1">{details.question}</h1>
			<TextField details={details} />
		</Container>
	);
};

export default Page36;
