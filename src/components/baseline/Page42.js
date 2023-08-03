import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import OptionCard from "../utils/OptionCard";

const details = {
	question: "Which of the listed have you ever taken in your life?",
	row1: [
		{
			name: "Alcohol",
			value: "Alcohol",
			style: {
				code: "cardblue",
				color: "#1976d2",
				bgColor: "rgb(230, 245, 250)",
			},
			selected: false,
		},
		{
			name: "Cannabis (Marijuana)",
			value: "Cannabis (Marijuana)",
			style: {
				code: "cardgreen",
				color: "#5e8d48",
				bgColor: "rgb(239, 244, 237)",
			},
			selected: false,
		},
		{
			name: "Cocaine/ Crack/ White Powder",
			value: "Cocaine/ Crack/ White Powder",
			style: {
				code: "cardpurple",
				color: "#ad0c7f",
				bgColor: "rgb(247, 239, 247)",
			},
			selected: false,
		},
		{
			name: "Shisha",
			value: "Shisha",
			style: {
				code: "cardorange",
				color: "#ffa929",
				bgColor: "rgb(255, 246, 234)",
			},
			selected: false,
		},
		{
			name: "Kuber",
			value: "Kuber",
			style: {
				code: "cardpurple",
				color: "#ad0c7f",
				bgColor: "rgb(247, 239, 247)",
			},
			selected: false,
		},
		{
			name: "Cigarettes/tobacco",
			value: "Cigarettes/tobacco",
			style: {
				code: "cardorange",
				color: "#ffa929",
				bgColor: "rgb(255, 246, 234)",
			},
			selected: false,
		},
		{
			name: "Weed Cookies/ Weed Cakes",
			value: "Weed Cookies/ Weed Cakes",
			style: {
				code: "cardgreen",
				color: "#5e8d48",
				bgColor: "rgb(239, 244, 237)",
			},
			selected: false,
		},
		{
			name: "Illegal Opiods e.g Heroin",
			value: "Illegal Opiods e.g Heroin",
			style: {
				code: "cardblue",
				color: "#1976d2",
				bgColor: "rgb(230, 245, 250)",
			},
			selected: false,
		},
		{
			name: "Legal opioids (e.g. Pethidine, Tramadol)",
			value: "Legal opioids (e.g. Pethidine, Tramadol)",
			style: {
				code: "cardgreen",
				color: "#5e8d48",
				bgColor: "rgb(239, 244, 237)",
			},
			selected: false,
		},
		{
			name: "Codeine and Cough Syrups abused to get “high",
			value: "Codeine and Cough Syrups abused to get “high",
			style: {
				code: "cardorange",
				color: "#ffa929",
				bgColor: "rgb(255, 246, 234)",
			},
			selected: false,
		},
		{
			name: "Inhalants e.g. jet fuel, gasoline, thinner, glue etc.",
			value: "Inhalants e.g. jet fuel, gasoline, thinner, glue etc.",
			style: {
				code: "cardpurple",
				color: "#ad0c7f",
				bgColor: "rgb(247, 239, 247)",
			},
			selected: false,
		},
		{
			name: "Others",
			value: "Others",
			style: {
				code: "cardgreen",
				color: "#5e8d48",
				bgColor: "rgb(239, 244, 237)",
			},
			selected: false,
		},

		{
			name:
				"Prescription drugs e.g. Cozepam/ C/ Yellow/ Maduya, Artane/ Benzhexol/ Rohypnol/ Diazepam/ Bughizi/ Valium/ Largactil/ Ma White/ Ma Blue ",
			value:
				"Prescription drugs e.g. Cozepam/ C/ Yellow/ Maduya, Artane/ Benzhexol/ Rohypnol/ Diazepam/ Bughizi/ Valium/ Largactil/ Ma White/ Ma Blue ",
			style: {
				code: "cardblue",
				color: "#1976d2",
				bgColor: "rgb(230, 245, 250)",
			},
			selected: false,
		},
		// {
		// 	name: "None",
		// 	value: "None",
		// 	style: {
		// 		code: "cardpurple",
		// 		color: "#ad0c7f",
		// 		bgColor: "rgb(247, 239, 247)",
		// 	},
		// 	selected: false,
		// },
	],
	direction: "row",
};

const Page42 = () => {
	return (
		<Box
			sx={{
				display: "flex",
				paddingTop: "2%",
				paddingBottom: "10%",
				height: { xs: "850px" },
			}}
		>
			<Container fixed>
				<h1 style={{ lineHeight: "30px" }}>{details.question}</h1>
				<h2>(You can choose all that applies)</h2>
				<Grid container spacing={2}>
					{details.row1.map((value, index) => {
						return (
							<Grid key={index} xs={index === 12 ? 12 : 12} md={index === 12 ? 9 : 3}>
								<OptionCard options={value} question={details.question} />
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</Box>
	);
};

export default Page42;
