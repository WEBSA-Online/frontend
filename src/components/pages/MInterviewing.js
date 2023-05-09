import React from "react";
import Progress from "../motivational_worksheets/worksheets/components/CircularProgress";
import WorksheetTile from "../motivational_worksheets/WorksheetTemp";
import { useWorksheets } from "../motivational_worksheets/worksheets/hooks/APIdata";

const miWorksheets = [
	{ title: "Significance of Behavioral Change", status: false, link: "#" },
	{
		title: "Motivation to Change by Focusing on Outcomes",
		status: false,
	},
	{
		title: "Motivation to Change by Focusing on Advantages",
		status: false,
	},
	{
		title: "Change Encouraging Factors",
		status: false,
	},
	{
		title: "Decisional Balance Worksheet",
		status: false,
	},
];

export default function Home() {
	const { data, loading, error } = useWorksheets();	

	let tasks = 0;
	const numOfWorksheets = 5

	if (loading === false && error.status === false) {
		
	}

	miWorksheets.forEach((value)=>{

	})



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
