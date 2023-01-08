import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faBan,
	faPlus,
	faBook,
	faMusic,
	faVolleyball,
	faPencil,
	faUserFriends,
	faPeopleRoof,
	faUsers,
	faMobile,
	faPalette,
	faDog,
	faPersonPraying,
	faVideoCamera,
	faPeopleLine,
   faGamepad,
   faSquarePersonConfined,
   faPeopleArrows,
   faCouch,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import OptionCard from "../utils/OptionCard";

const details = {
	question:
		"When things are tough or stressful, I get through the tough times by",
	row1: [
		{
			name: "Prayer",
			value: "Prayer",
			style: {
				code: "cardblue",
				color: "#1976d2",
				bgColor: "rgb(230, 245, 250)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faPersonPraying} />,
		},
		{
			name: "Gaming",
			value: "Gaming",
			style: {
				code: "cardgreen",
				color: "#5e8d48",
				bgColor: "rgb(239, 244, 237)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faGamepad} />,
		},
		{
			name: "Exercise and Sports",
			value: "Exercise and Sports",
			style: {
				code: "cardpurple",
				color: "#ad0c7f",
				bgColor: "rgb(247, 239, 247)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faVolleyball} />,
		},
		{
			name: "Social media",
			value: "Social media",
			style: {
				code: "cardorange",
				color: "#ffa929",
				bgColor: "rgb(255, 246, 234)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faMobile} />,
		},
		{
			name: "Hanging out with family/ friends",
			value: "Hanging out with family/ friends",
			style: {
				code: "cardpurple",
				color: "#ad0c7f",
				bgColor: "rgb(247, 239, 247)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faUserFriends} />,
		},
		{
			name: "Meditation/yoga",
			value: "Meditation/yoga",
			style: {
				code: "cardorange",
				color: "#ffa929",
				bgColor: "rgb(255, 246, 234)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faSquarePersonConfined} />,
		},
		{
			name: "Making/ listening to music",
			value: "Making/ listening to music ",
			style: {
				code: "cardgreen",
				color: "#5e8d48",
				bgColor: "rgb(239, 244, 237)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faMusic} />,
		},
		{
			name: "Reading/ writing",
			value: "Reading/ writing",
			style: {
				code: "cardblue",
				color: "#1976d2",
				bgColor: "rgb(230, 245, 250)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faMobile} faPencil />,
		},
		{
			name: "Making art/ drawing",
			value: "Making art/ drawing",
			style: {
				code: "cardgreen",
				color: "#5e8d48",
				bgColor: "rgb(239, 244, 237)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faPalette} />,
		},
		{
			name: "Talking to someone I trust",
			value: "Talking to someone I trust",
			style: {
				code: "cardpurple",
				color: "#ad0c7f",
				bgColor: "rgb(247, 239, 247)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faPeopleArrows} />,
		},
		{
			name: "Relaxing/ taking a break",
			value: "Relaxing/ taking a break",
			style: {
				code: "cardblue",
				color: "#1976d2",
				bgColor: "rgb(230, 245, 250)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faCouch} />,
		},
		{
			name: "Other",
			value: "Other",
			style: {
				code: "cardorange",
				color: "#ffa929",
				bgColor: "rgb(255, 246, 234)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faPlus} />,
		},
		{
			name: "None",
			value: "None",
			style: {
				code: "cardpurple",
				color: "#ad0c7f",
				bgColor: "rgb(247, 239, 247)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faBan} />,
		},
	],
	direction: "row",
};

const Page11 = () => {
	return (
		<Container
			fixed
			sx={{
				display: "flex",
				paddingTop: "2%",
				paddingBottom: "10%",
			}}
		>
			{/* <h1 style={{ lineHeight: "38px" }}>{details.question}</h1>
			<h2>(You can choose more than one.)</h2>
			<Grid container spacing={2}>
				{details.row1.map((value, index) => {
					return (
						<Grid xs={6} md={3}>
							<OptionCard key={index} options={value} question={details.question} />
						</Grid>
					);
				})}
			</Grid> */}
		</Container>
	);
};

export default Page11;
