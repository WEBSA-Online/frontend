import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function BasicAccordion() {
	return (
		<div>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<p className="font-websa-bold text-lg">
						What are the benefits of this study?
					</p>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						There are several benefits in participating in this study. Firstly, there
						is no known web-based intervention package to reduce alcohol and drug
						abuse among young people in tertiary institutions in this country.
						Therefore, a person participating in this study will contribute to this
						important package. Secondly, through participation in the screening
						process students will be more aware of the dangers of alcohol and drug
						abuse. Thirdly students at risk of developing addiction will be referred
						to the university counsellors who will help them. Fourthly, knowing one’s
						alcohol and drug addiction status helps in early prevention of the vice.
						Long term benefits include reducing alcohol and drug related complications
						and harm to others by vehicle, violence, or other means among young people
						in tertiary institutions. Other benefits include but are not limited to
						decreasing dropout rates of university students, decreasing negative
						long-term alcohol related health problems, decreasing short-term health
						problems such as hangovers, decreasing potential for driving while
						intoxicated, decreasing problems with the law, and decreasing harm to
						others by vehicle, violence, or other means.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<p className="font-websa-bold text-lg">
						Who are the investigators?
					</p>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						The details about investigators in the contacts tab
					</Typography>
					<Link to="/contact-us">
						<button className="font-websa-bold transition-all bg-websa-red hover:bg-white hover:text-websa-green p-2.5 rounded shadow-sm text-white font-bold text-lg w-[60%] md:w-[40%]">
							Go to Contacts Page
						</button>
					</Link>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
