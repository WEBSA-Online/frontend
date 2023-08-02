import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import "animate.css";
import RadioOptions from "../utils/RadioOptions";
import "animate.css";

const details = {
	question: "Are terms agreed?",
	options: [{ name: "I accept" }, { name: "I decline" }],
	direction: "column",
};

const StartPage = () => {
	return (
		<Box
			sx={{
				paddingTop: "3%",
				paddingBottom: "15%",
				// height: "100% !important",
				// overflow: "auto",
				padding: { md: "3% 0 15% 0", xs: "3% 5% 15% 5%" },
			}}
		>
			<Grid container>
				<Grid sm={12} md={7} sx={{ marginBottom: "20px" }}>
					<Box>
						<Typography
							variant="h4"
							sx={{ color: "white", fontFamily: "Poppins-Bold", marginBottom: "5px" }}
						>
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
						<p className="text-white font-websa-bold">
							Please note, there are 2 exceptions that are important for you to
							understand. We must report and/or refer you for further screening if you
							disclose any of the following:
						</p>
						<ol className="text-white font-websa-bold">
							<li>1. You are hurting or intend to hurt someone else</li>
							<li>2. You are hurting yourself or you intend to hurt yourself.</li>
						</ol>
						<p className="text-white font-websa-bold">
							These exceptions exist because your safety is the most important thing
						</p>
					</Box>
				</Grid>
				<Grid
					sm={12}
					md={5}
					sx={{
						padding: {
							xs: "0px 0px 50px 0px",
							md: "30px 20px",
						},
					}}
				>
					<RadioOptions details={details} grid={12} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default StartPage;
