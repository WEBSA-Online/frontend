import Card from "@mui/material/Card";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveMany } from "../../redux/slices/stepSlice";

const OptionCard = ({ options, question }) => {
	let selected = false;
	const page = useSelector((state) => state.steps.activeStep);
	const savedResponse = useSelector((state) => state.steps.responses);
	const dispatch = useDispatch();

	let checkSelection;
	let counter = 0

	if (savedResponse[page] !== undefined) {
		counter = savedResponse[page].length;
		
		if (
			savedResponse[page].find((value) => value.answer === options.name) !==
			undefined
		) {
			selected = true;
			checkSelection =
				savedResponse[page].find((value) => value.answer === options.name) !==
				undefined;
			
		}	
	} 

	

	const handleSave = () => {
		if (page===12){
			if (checkSelection || counter < 3) {
				dispatch(
					saveMany({
						question: question,
						answer: options.name,
						pageIndex: page,
					})
				);
			} 
		} else {
			dispatch(
				saveMany({
					question: question,
					answer: options.name,
					pageIndex: page,
				})
			);
		}
			
	};

	return (
		<Card
			disabled
			sx={{
				border: selected ? `2px solid ${options.style.color}` : `2px solid white`,
				"&:hover": {
					backgroundColor: selected
						? `${options.style.color}`
						: `${options.style.bgColor}`,
					border: selected
						? `2px solid ${options.style.color}`
						: `2px solid ${options.style.color}`,
				},
				backgroundColor: selected && `${options.style.color}`,
				color: selected && "white",
			}}
			className="option-card"
			onClick={() => handleSave()}
		>
			<span className={selected ? "cardselected" : options.style.code}>
				{options.icon}
			</span>
			{options.name}
		</Card>
	);
};

export default OptionCard;
