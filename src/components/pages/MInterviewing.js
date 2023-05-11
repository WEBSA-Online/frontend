import React from "react";
import Progress from "../motivational_worksheets/worksheets/components/CircularProgress";
import WorksheetTile from "../motivational_worksheets/WorksheetTile";
import { useWorksheets } from "../motivational_worksheets/worksheets/hooks/APIdata";

const miWorksheets = [
	{
		title: "Significance of Behavioral Change",
		status: false,
		sheet: "worksheet_1",
	},
	{
		title: "Motivation to Change by Focusing on Outcomes",
		status: false,
		sheet: "worksheet_2",
	},
	{
		title: "Motivation to Change by Focusing on Advantages",
		status: false,
		sheet: "worksheet_3",
	},
	{
		title: "Change Encouraging Factors",
		status: false,
		sheet: "worksheet_4",
	},
	{
		title: "Decisional Balance Worksheet",
		status: false,
		sheet: "worksheet_5",
	},
];

export default function Home() {
	const { data, loading, error } = useWorksheets();

	let tasks = 0;
	const numOfWorksheets = 5;

	if (loading === false && error.status === false) {
		if (data.worksheet_1.length > 0){
			tasks++;
			miWorksheets[0].status = true
		}
		if (data.worksheet_2.length > 0) {
			tasks++;
			miWorksheets[1].status = true;
		}
		if (data.worksheet_3.length > 0){
			tasks++;
			miWorksheets[2].status = true;
		}
		if (data.worksheet_5.length > 0) {
			tasks++;
			miWorksheets[3].status = true;
		}
		if (data.worksheet_6.length > 0){
			tasks++;
			miWorksheets[4].status = true;
		}
	}

	return (
		<div className="mt-6 divide-y">
			<div className="bg-slate-200 p-5 rounded-t-lg flex flex-wrap items-center justify-center sm:justify-between">
				<p className="font-websa-bold text-lg sm:text-xl">
					Motivational Interviewing
				</p>
				<div className="flex items-center mt-3 sm:mt-0">
					<p className="text-lg mr-2">Completion</p>
					<Progress
						size={50}
						strokeWidth={6}
						percentage={tasks}
						fontSize="17px"
						x="50%"
						y="22%"
						dy="20px"
						color="green"
						total={numOfWorksheets}
					/>
				</div>
			</div>
			{miWorksheets.map((value, index) => {
				return (
					<WorksheetTile title={value.title} index={index} status={value.status} />
				);
			})}
		</div>
	);
}
