import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import "animate.css";
import RadioOptions from "../utils/RadioWithmark"
import "animate.css";

const details = {
	question: "Are terms agreed?",
	options: [
		{ name: "I accept", value: "accepted" },
		{ name: "I decline", value: "declined" },
	],
	direction: "column",
};

const StartPage = () => {
	return (
		<Container
			fixed
			sx={{
				paddingTop: "3%",
				paddingBottom: "15%",
			}}
		>
			<Grid container>
				<Grid sm={12} md={7} sx={{ marginBottom: "20px" }}>
					<Box className="scroll">
						<Typography variant="h4" sx={{ color: "white" }}>
							Our Policy on Confidentiality
						</Typography>
						<p className="whiteText">
							Hello there, thank you for clicking on that link to assess the status of
							some key health behaviours! Because we care about your health and
							well-being, we have some questions we'd like you to answer. We hope you
							feel free to share honestly and openly about yourself and how you are
							doing. Additionally, you will get a chance to assess your substance use
							addiction status and you will know your results immediately.
						</p>
						<p className="whiteText">
							Please answer each question in the way that best describes you and how
							you are most comfortable responding. Your answers are PRIVATE and will
							only be shared with a professional counsellor.
						</p>
						<p className="whiteText">
							Please note, there are 2 exceptions that are important for you to
							understand. We must report and/or refer you for further screening if you
							disclose any of the following:
						</p>
						<ol className="whiteText">
							<li>You are hurting or intend to hurt someone else</li>
							<li>You are hurting yourself or you intend to hurt yourself.</li>
						</ol>
						<p className="whiteText">
							These exceptions exist because your safety is the most important thing
						</p>
					</Box>
				</Grid>
				<Grid sm={12} md={5} sx={{ padding: "30px 20px" }}>
					<RadioOptions details={details} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default StartPage
