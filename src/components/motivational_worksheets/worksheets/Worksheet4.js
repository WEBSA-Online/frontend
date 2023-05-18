import React from "react";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useWorksheets } from "./hooks/APIdata";
import Empty from "./components/empty/Empty5";
import ActionPoint from "./components/ActionPoint";
import Loader from "./components/utils/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import OptionCard from "./components/utils/OptionsCard";

const options = [
	{
		text: "To Improve Personal safety",
		selected: false,
	},
	{
		text: "To improve Personal finance",
		selected: false,
	},
	{
		text: "To be healthier",
		selected: false,
	},
	{
		text: "To improve Self confidence",
		selected: false,
	},
	{
		text: "To follow my religious faith",
		selected: false,
	},
	{
		text: "To improve my productivity",
		selected: false,
	},
	{
		text: "To feel better about my way of life",
		selected: false,
	},
	{
		text: "To improve my academic performance",
		selected: false,
	},
	{
		text: "To be on right side of the law/ be a better citizen",
		selected: false,
	},

	{ text: "Having a better relationship with my Family ", selected: false },
	{
		text: "Spend time with friends without feeling peer pressure",
		selected: false,
	},
	{
		text: "Avoid effects of using alcohol or other drugs",
		selected: false,
	},
	{
		text: "To adhere to university rules and regulations",
		selected: false,
	},
	{
		text: "I care about what people in my life think of me",
		selected: false,
	},
	{
		text: "It’s challenge (I take it as a challenge and I can do it).",
		selected: false,
	},
	{
		text:
			"There are  several other kinds of fun/enjoyment/interesting engagements beyond alcohol or drugs",
		selected: false,
	},
	{
		text:
			"Personal profile improvement in my community (residence, work place, church/mosque) like being known as hard working, well behaved, disciplined and more",
		selected: false,
	},
	{
		text: "Other",
		selected: false,
	},
];

function Worksheet5({ page }) {
	const { data, loading, error } = useWorksheets();

	let items = [];

	if (loading === false && error.status === false) {
		items = data.worksheet_5.filter((value) => {
			return value;
		});
	}

	return (
		<>
			<Stack className="px-5" spacing={2}>
				<p className="text-base">
					There are many factors which can influence change of behaviour. These
					factors could be internal or external. Internal factors that can influence
					a person include new experience, satisfaction, gratitude and more. However
					external influencing factors include positive peer pressure to change, job
					promotion, church influence, relatives, and so on). In the table below
					please list all factors that can change your drinking/drug consumption.
				</p>
				<p className="text-base">
					The objective of this exercise is to enable you to identify their
					motivators to change.
				</p>
				<ActionPoint text="Highlight the things that motivate you to change." />
			</Stack>
			<div class="mt-5 flex justify-center">
				<div className="w-[95%]">
					{loading === true ? (
						<Loader
							iconclass="animate-spin mr-3 text-websa-red text-2xl cursor-pointer"
							divclass="py-10 flex justify-center"
						/>
					) : error.status === true ? (
						<div className="py-10 flex flex-col items-center justify-center">
							<FontAwesomeIcon
								className="text-2xl text-red-700"
								icon={faTriangleExclamation}
							/>
							<p>{error.msg}</p>
						</div>
					) : items.length === 0 ? (
						<Grid container spacing={2}>
							{options.map((value, index) => {
								return (
									<Grid key={index} xs={12} sm={4}>
										<OptionCard
											items={options}
											option={value}
											index={index}
										/>
									</Grid>
								);
							})}
						</Grid>
					) : (
						<Grid container spacing={2}>
							{items.map((value, index) => {
								return (
									<Grid key={index} xs={12} sm={4}>
										<OptionCard
											items={options}
											option={value}
											index={index}
										/>
									</Grid>
								);
							})}
						</Grid>
					)}
				</div>
			</div>
		</>
	);
}

export default Worksheet5;
