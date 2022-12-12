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
	faPeopleLine
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import OptionCard from "../utils/OptionCard";

const details = {
	question:
		"What have others said you are good at or what makes you proud of yourself?",
	row1: [
		{
			name: "Work or school",
			value: "Work or school",
			style: {
				code: "cardblue",
				color: "#1976d2",
				bgColor: "rgb(230, 245, 250)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faBook} />,
		},
		{
			name: "Music",
			value: "Music",
			style: {
				code: "cardgreen",
				color: "#5e8d48",
				bgColor: "rgb(239, 244, 237)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faMusic} />,
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
			name: "Writing and reading",
			value: "Writing and reading",
			style: {
				code: "cardorange",
				color: "#ffa929",
				bgColor: "rgb(255, 246, 234)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faPencil} />,
		},
		{
			name: "Being a good friend/ Making friends",
			value: "Being a good friend/ Making friends",
			style: {
				code: "cardpurple",
				color: "#ad0c7f",
				bgColor: "rgb(247, 239, 247)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faUserFriends} />,
		},
		{
			name: "Helping out at home",
			value: "Helping out at home",
			style: {
				code: "cardorange",
				color: "#ffa929",
				bgColor: "rgb(255, 246, 234)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faPeopleRoof} />,
		},
		{
			name: "Participating in clubs ",
			value: "Participating in clubs",
			style: {
				code: "cardgreen",
				color: "#5e8d48",
				bgColor: "rgb(239, 244, 237)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faUsers} />,
		},
		{
			name: "Using technology",
			value: "Using technology",
			style: {
				code: "cardblue",
				color: "#1976d2",
				bgColor: "rgb(230, 245, 250)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faMobile} faPalette />,
		},
		{
			name: "Art/ Crafts",
			value: "Art/ Crafts",
			style: {
				code: "cardgreen",
				color: "#5e8d48",
				bgColor: "rgb(239, 244, 237)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faPalette} />,
		},
		{
			name: "Taking care of animals",
			value: "Taking care of animals",
			style: {
				code: "cardpurple",
				color: "#ad0c7f",
				bgColor: "rgb(247, 239, 247)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faDog} />,
		},
		{
			name: "Religion/ Spirituality",
			value: "Religion/ Spirituality",
			style: {
				code: "cardblue",
				color: "#1976d2",
				bgColor: "rgb(230, 245, 250)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faPersonPraying} />,
		},
		{
			name: "Theatre/ dance",
			value: "Theatre/ dance",
			style: {
				code: "cardorange",
				color: "#ffa929",
				bgColor: "rgb(255, 246, 234)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faVideoCamera} />,
		},
		{
			name: "Leadership",
			value: "Leadership",
			style: {
				code: "cardblue",
				color: "#1976d2",
				bgColor: "rgb(230, 245, 250)",
			},
			selected: false,
			icon: <FontAwesomeIcon icon={faPeopleLine} />,
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

const Page10 = () => {
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
				<h2>(You can choose more than one.)</h2>
				<Grid container spacing={2}>
					{details.row1.map((value, index) => {
						return (
							<Grid xs={6} md={3}>
								<OptionCard key={index} options={value} question={details.question} />
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</Box>
	);
};

export default Page10;
