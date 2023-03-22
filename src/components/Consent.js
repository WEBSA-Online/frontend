import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Stack, Button, Box } from "@mui/material";
import * as React from "react";
import ConsentOptions from "./utils/ConsentRadioOption";
import { useNavigate } from "react-router-dom";

const Page = () => {
	const [consent, setConsent] = React.useState("");
	const [selected, setSelected] = React.useState(false);
	const navigate = useNavigate();

	const details = {
		options: [{ name: "I consent" }, { name: "I don't consent" }],
		direction: "column",
	};

	const submit = () => {
		navigate("/register");
	};

	// const backtohome = () => {
	// 	localStorage.clear();
	// 	navigate("https://websaonline.com");
	// };

	return (
		<Box
			sx={{
				backgroundColor: "#093095",
				height: { sm: "auto", md: "100vh" },
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: { xs: "4%", md: "0 5%" },
			}}
		>
			{selected ? (
				<Grid container>
					<Grid
						sm={12}
						md={12}
						sx={{
							height: { xs: "100vh" },
							display: { xs: "flex" },
							alignItems: { xs: "center" },
						}}
					>
						<Stack sx={{ alignItems: "center" }} spacing={3}>
							{consent === "I consent" ? (
								<>
									<Typography
										variant="h4"
										sx={{
											color: "white",
											fontFamily: "Poppins-Bold",
											textAlign: "center",
										}}
									>
										Thank you! Proceed to the next stage
									</Typography>
									<Button
										variant="contained"
										size="large"
										sx={{
											backgroundColor: "#fff",
											color: "#093095",
											fontWeight: "bold",
											"&:hover": { color: "#fff", backgroundColor: "#093095" },
										}}
										onClick={submit}
									>
										Continue
									</Button>
								</>
							) : (
								<>
									<Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
										Thank you for participating.
									</Typography>
									<a style={{ textDecoration: "none" }} href="https://websaonline.com">
										<Button
											variant="contained"
											size="large"
											sx={{
												backgroundColor: "#fff",
												color: "#093095",
												fontWeight: "bold",
												"&:hover": { color: "#fff", backgroundColor: "#093095" },
											}}
										>
											Continue
										</Button>
									</a>
								</>
							)}
						</Stack>
					</Grid>
				</Grid>
			) : (
				<Grid container>
					<Grid xs={12} md={12}>
						<Stack sx={{ alignItems: "center" }} spacing={1}>
							<Typography
								variant="h4"
								sx={{ color: "white", fontFamily: "Poppins-Bold" }}
							>
								Statement of Consent
							</Typography>
							<Box
								sx={{
									height: "300px",
									overflow: " auto",
									backgroundColor: "white",
									borderRadius: "2px",
									padding: "3%",
								}}
							>
								{" "}
								<Typography
									variant="h6"
									sx={{
										color: "black",
										fontFamily: "Poppins-Bold",
										fontSize: "16px",
									}}
								>
									MakSPH- Makerere University School of Public Health
								</Typography>
								<Typography
									variant="h6"
									sx={{
										color: "black",
										fontFamily: "Poppins-Regular",
										fontSize: "15px",
									}}
								>
									{" "}
									We had supporting advice and materials From Dr. Jody Kamon, a
									psychologist and researcher at the Center for Behavioral Health
									Integration, Montpelier, VT, USA; phone: 802-999-1676; email:
									jody@c4bhi.com. Background and rationale for the study:
									<br />
									Introduction: Alcohol and other substance use disorders (ASUD) among
									the youth are on the rise in Uganda. These are characterized by heavy
									episodic drinking, high rates of injection and non-injection drug use.
									There is an urgent need for immediate measures to counter this problem.
									However, there is growing evidence of successful use of e-interventions
									to address substance use problems among adolescents and young people.
									In Uganda, interventions for ASUD problems are mainly through
									traditional conventional face-to-face mechanisms. We propose a
									web-based intervention that is convenient and has proven to be a
									reliable and cheap way to prevent and treat ASUD among University
									students. <br />
									<br />
									Methods: The intervention will involve a web-based platform –
									WebsaOnline accessible to participants through a url address. Students
									will be recruited to use WebsaOnline through popularization of the
									online platform using the University student guild, social media
									campaigns and other campaigns. The online platform will initially
									involve screening for ASUD using the AUDIT and DUDIT tools. All those
									who will screen positive for ASUD problems will be referred to either
									routine standard of care and or to the WebsaOnline intervention
									platform.
									<br />
									<br />
									The WebsaOnline intervention will allow users to track their substance
									use levels and monitor progress. <br />
									<br />
									Additionally, the participants in the intervention will be provided
									with standardised information regarding general Substance use. We shall
									then evaluate the feasibility and effectiveness of the web-based
									intervention to prevent and treat ASUD problems. <br />
									Outcomes including level of use and severity of the problem will be
									assessed at baseline, midline after 30 days, and then after 3 months at
									completion of the intervention, and at 6 months to assess for
									abstinence or remission in to substance use.
								</Typography>
								<Typography
									variant="h6"
									sx={{
										color: "black",
										fontFamily: "Poppins-Bold",
										fontSize: "16px",
									}}
								>
									A description of sponsors of the research project and the
									organizational affiliation of the researchers:
								</Typography>
								<Typography
									variant="h6"
									sx={{
										color: "black",
										fontFamily: "Poppins-Bold",
										fontSize: "16px",
									}}
								>
									Purpose:
								</Typography>
								<Typography
									variant="h6"
									sx={{
										color: "black",
										fontFamily: "Poppins-Regular",
										fontSize: "15px",
									}}
								>
									{" "}
									The purpose of the study is to develop and test the effectiveness of a
									brief web-based intervention to prevent and treat ASUD among university
									students aged 18-24.
									<br />
									You are being asked to participate in the study because you meet the
									inclusion criteria of being in the age bracket of 18-24, you are a
									university student in one of the selected universities for the study
									and information you have given us shows that you have experience with
									taking either alcohol or drugs. <br />
									<br />
									Methods: The intervention will involve a web-based platform –
									WebsaOnline accessible to participants through a url address. Students
									will be recruited to use WebsaOnline through popularization of the
									online platform using the University student guild, social media
									campaigns and other campaigns. The online platform will initially
									involve screening for ASUD using the AUDIT and DUDIT tools. All those
									who will screen positive for ASUD problems will be referred to either
									routine standard of care and or to the WebsaOnline intervention
									platform.
									<br />
									<br />
									The study involves experimentation. After the screening there is
									randomization into two groups, the cases and controls. The controls get
									a brief web-based motivational Interviewing and reading materials while
									the controls use the usual channels of prevention and treatment
									available at the Universities. The WebsaOnline intervention will allow
									users to track their substance use levels and monitor progress.
									<br />
									<br />
								</Typography>
								<Typography
									variant="h6"
									sx={{
										color: "black",
										fontFamily: "Poppins-Bold",
										fontSize: "16px",
									}}
								>
									The estimated duration the research participant will take to in the
									research project: 6 months:
								</Typography>
								<Typography
									variant="h6"
									sx={{
										color: "black",
										fontFamily: "Poppins-Bold",
										fontSize: "16px",
									}}
								>
									Procedures:
								</Typography>
								<Typography
									variant="h6"
									sx={{
										color: "black",
										fontFamily: "Poppins-Regular",
										fontSize: "15px",
									}}
								>
									{" "}
									In the first stage, the participant will be requested to fill an online
									screening form for alcohol and drug abuse. This will take about 20
									minutes. If the participant has a score of 8+ on alcohol addiction
									score or 6+ on drug addiction score the participant will be immediately
									randomised to a control and intervention arms of the study. The data
									analytics embedded in the screening app will do the random allocation.
									Those who won’t be selected will be thanked for participation and those
									randomised will be informed as well.
									<br />
									<br />
									On the second stage, the participants selected for the study will fill
									the consent form and there after fill the baseline assessment form to
									provide more information on key indicators for the study. The form will
									request for additional information on back ground characteristics and
									alcohol consumption and drug use patterns. This second stage will take
									another one hour. The third stage will be intervention and this will
									involve the web-based intervention for those on the intervention arm
									while those on the control arm will be referred to the regular or usual
									care offered at the university. The students on the intervention arm
									will need at most three hours to read and answer questions in the
									intervention package while those on the control arm will need to visit
									the counselling office and follow guidelines provided. The time taken
									at the counselling office and subsequent visits by those on control arm
									depends different procedures used by each participating institution.
									The fourth and last stage will be monitoring and the evaluation at
									midterm and endline. Among both cases and controls monitoring will be
									carried out using a short communication message to check on adherence
									to practical advise while the midterm and endline evaluations will each
									take at most 1 hour.
									<br />
									<br />
									Participation in this study will necessitate upload of the screening,
									consenting, baseline, midline and endline tools in form of computer
									APPS on the participant’s phone or computer. Then counsellors will
									check on the participant at least weekly if he or she is on
									intervention arm or monthly if on control arm.
									<br />
									<br />
									To confirm consent participants are asked to electronically append
									their thumbprint or signature before the baseline assessment and
									participation in the study.
									<br />
									<br />
									The web-based intervention package will be on WebsaOnline password
									protected platform and it will allow participants to track their
									substance use levels and monitor progress. They will be requested to
									check on the platform at least weekly.
									<br />
									<br />
									<strong>Who will participate in the study:</strong> (Brief description
									of the intended participants, the expected total number and how long
									each will be required to be active in the study.) <br />
									All students aged 18-24, with alcohol use disorder test score of 8+ or
									drug use disorder test score of 6+, and being students of any of the
									universities: 1 =Makerere University 2= Kyambogo university 3= Makerere
									Business School(MUBS) 4=Uganda Christian University 5= Uganda Martyrs
									University 6=Kampala International University 7= Ndejje University
									<br />
									<br />
									<strong>Risks/Discomforts:</strong> (Description of the possible risks
									and discomforts a participant might experience while in the study.)
									<br />
									<br />
									<strong>Risks:</strong>The Common risks in web-based intervention are
									loss of confidentiality and emotional/psychological distress. The study
									team has set up some safe guards against these. There is a password for
									everyone including the study team members. Secondly, all the study
									members sign to keep confidentiality in all matters related to the
									study and the data from the study. Thirdly, all participants are
									requested to read through the consent form and sign it if they agree
									with the contents. However, if a participant gets
									emotional/psychological distress he or she will be referred to the
									counselling services in the University. It is not possible to identify
									all potential risks in research procedures, but the investigators have
									a lot of experience and skills that enable them to look for solutions
									or mitigation measures for any known risks to the participants.
									<br />
									<br />
									<strong>Benefits:</strong>There are several benefits in participating
									in this study. Firstly, there is no known web-based intervention
									package to reduce risky alcohol and drug use among young people in
									tertiary institutions in this country. Therefore, a person
									participating in this study will contribute to this important package.
									Secondly, through participation in the screening process students will
									be more aware of the dangers of risky alcohol and drug use. Thirdly
									students at risk of meeting criteria for a substance use disorder will
									be referred to the university counsellors who will help them. Fourthly,
									knowing one’s alcohol and drug use status increases their own awareness
									and helps in early intervention.
									<br />
									<br />
									Long term benefits include reducing alcohol and drug related
									complications and harm to others by vehicle, violence, or other means
									among young people in tertiary institutions. Other benefits include but
									are not limited to decreasing dropout rates of university students,
									decreasing negative long-term alcohol related health problems,
									decreasing short-term health problems such as hangovers, decreasing
									potential for driving while intoxicated, decreasing problems with the
									law, and decreasing harm to others by vehicle, violence, or other
									means.
									<br />
									<br />
									<strong>Confidentiality:</strong>All participants in the study,
									investigating team and the professional psychotherapists involved in
									the study will require passwords to access web-based platform or any
									other data related to the study.
									<br />
									<br />
									<strong>
										The local Research Ethics Committee (MakSPHREC) and Uganda National
										Council for Science and Technology (UNCST) :
									</strong>
									will have access to private information that identifies the research
									participants by name. This is meant for quality assurance check and
									follow-up in case of need
									<br />
									<br />
									<strong>Alternatives:</strong> Participants should be informed that
									participation in the study is not mandatory and what possible
									alternatives are available other than participating in the study.
									Participation in this study is not mandatory. Your participation in the
									study is voluntary. If you have consented to participate but you feel
									you are no longer interested you can stop i-participation. There are
									alternative ways to get help when one is engaging in risky alcohol
									and/or drug use. You can visit your university counsellor or several
									rehabilitation centres in Kampala and surrounding areas.
									<br />
									<br />
									<strong>Cost: </strong>The known cost to be met by the participant is
									internet data. This will be refunded from the study funds.
									<br />
									<br />
									<strong>Compensation</strong> for participation in the study: We are
									not able to compensate for all the time and inputs into the study.
									However, all those who will fill the screening form will have data
									worth <strong>Ug Shs 2000.</strong> Those who will proceed to
									intervention arm will get
									<strong>UG Shs 5000 </strong>while those on control arm will get{" "}
									<strong>UG Shs 2500 monthly.</strong>
									<br />
									<br />
									<strong>Reimbursement:</strong> State how participant costs in terms of
									travel and opportunity cost while they come to the study site will be
									met. (Transport, time and meals) There will be no travel costs for
									participants. Possible opportunity cost for the participants may be in
									form of work on academic assignments or just self-study since they are
									students. This cannot be quantified directly but we believe the cost is
									really minimal given that filling forms take a maximum of one hour and
									the web-based intervention package for those in intervention has one
									off 3 hours.
									<br />
									<br />
									<strong>Questions about the study:</strong> Those who have study
									related questions can reach the principal investigator Prof Nazarius
									Mbona Tumwesigye on Tel 0782447771/0703447771 or email naz@musph.ac.ug
									<br />
									<br />
									<strong>Questions about participants rights: </strong> If you have any
									questions about your rights as a research subject, you can call the
									Chair of the Higher Degrees, Research and Ethics Committee (HDREC) (Dr:
									Joseph Kagaayi on 0773785333/0701444154).
									<br />
									<br />
									<strong>Statement of voluntariness:</strong> You do not have to take
									part in this interview if you do not wish to do so, and refusal to
									participate will not affect you in any way. Your participation in this
									survey is voluntary. Even after you have agreed to participate in the
									interview or sign the informed consent document, you may withdraw at
									any time without penalty or denial of your entitlement to FP and social
									services.
									<br />
									<br />
									<strong>Dissemination of results:</strong> The research participants
									will get feedback on findings and progress of the study and that any
									new information that affects the study or data that has clinical
									relevance to research participants (including incidental findings) will
									be made available to research participants and/or their health care
									providers.
									<br />
									<br />
									<strong>Ethical approval:</strong> This study has been approved by
									Makerere University School of Public Health Research Ethics Committee
									(MakREC) and National council of science and technology (UNCST).
									<br />
									<br />
								</Typography>
								<Typography
									variant="h6"
									sx={{
										color: "black",
										fontFamily: "Poppins-Bold",
										fontSize: "16px",
									}}
								>
									Staement of consent:
								</Typography>
								<Typography
									variant="h6"
									sx={{
										color: "black",
										fontFamily: "Poppins-Regular",
										fontSize: "15px",
									}}
								>
									I have read through the{" "}
									<a
										style={{ color: "red", textDecoration: "none" }}
										href="https://websaonline.com/consent"
										target="_blank"
										rel="noreferrer"
									>
										consent
									</a>{" "}
									and I believe it has described to me what is going to be done, the
									risks, the benefits involved and my rights regarding this study. I
									understand that my decision to participate in this study will not alter
									my usual medical care. In the use of this information, my identity will
									be concealed. I am aware that I may withdraw at anytime. I understand
									that by signing this form, I do not waive any of my legal rights but
									merely indicate that I have been informed about the research study in
									which I am voluntarily agreeing to participate. A copy of this form
									will be provided to me.
								</Typography>
							</Box>
						</Stack>
						<Stack spacing={2} sx={{ marginTop: "20px", padding: { xs: "0 4%" } }}>
							<ConsentOptions
								details={details}
								setConsent={setConsent}
								setSelected={setSelected}
							/>
						</Stack>
					</Grid>
				</Grid>
			)}
		</Box>
	);
};

export default Page;
