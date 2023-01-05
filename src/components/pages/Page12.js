import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBan,
	faPlus,
	faMusic,
	faVolleyball,
	faUserFriends,
	faMobile,
	faPalette,
	faPersonPraying,
	faGamepad,
	faSquarePersonConfined,
	faPeopleArrows,
	faCouch,
	faFaceFrown,
	faSadTear,
	faSmileBeam,
	faPencil,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import OptionCard from "../utils/OptionCard";
import { faFaceFrownOpen, faFaceGrimace, faFaceMeh, faFaceSmileBeam, faLaughBeam, faTired } from "@fortawesome/free-regular-svg-icons";

const details = {
	question: " I feel this way about the future.",
	row1: [
		{
			name: "Sad",
			value: "Sad",
			style: {
				code: "cardblue",
				color: "#1976d2",
				bgColor: "rgb(230, 245, 250)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faFaceFrownOpen} />,
		},
		{
			name: "Hopeless",
			value: "Hopeless",
			style: {
				code: "cardgreen",
				color: "#5e8d48",
				bgColor: "rgb(239, 244, 237)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faTired} />,
		},
		{
			name: "Scared",
			value: "Scared",
			style: {
				code: "cardpurple",
				color: "#ad0c7f",
				bgColor: "rgb(247, 239, 247)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faFaceGrimace} />,
		},
		{
			name: "Worried",
			value: "Worried",
			style: {
				code: "cardorange",
				color: "#ffa929",
				bgColor: "rgb(255, 246, 234)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faSadTear} />,
		},
		{
			name: "Ok",
			value: "Ok",
			style: {
				code: "cardpurple",
				color: "#ad0c7f",
				bgColor: "rgb(247, 239, 247)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faFaceMeh} />,
		},
		{
			name: "Hopefull",
			value: "Hopefull",
			style: {
				code: "cardorange",
				color: "#ffa929",
				bgColor: "rgb(255, 246, 234)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faFaceSmileBeam} />,
		},
		{
			name: "Excited",
			value: "Excited ",
			style: {
				code: "cardgreen",
				color: "#5e8d48",
				bgColor: "rgb(239, 244, 237)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faLaughBeam} />,
		},
		{
			name: "Other",
			value: "Other",
			style: {
				code: "cardblue",
				color: "#1976d2",
				bgColor: "rgb(230, 245, 250)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faPlus} />,
		},
	],
	direction: "row",
};

const Page12 = () => {
	return (
		<Box
			sx={{
				background: "#e9f1f2",
				display: "flex",
				paddingTop: "2%",
				paddingBottom: "10%",
			}}
		>
			<Container fixed>
				<h1 style={{ lineHeight: "38px" }}>{details.question}</h1>
				<h2>(You can choose up to 3 feelings.)</h2>
				<Grid container spacing={2}>
					{details.row1.map((value, index) => {
						return (
							<Grid key={index} xs={6} md={3}>
								<OptionCard options={value} question={details.question} />
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</Box>
	);
};

export default Page12;
