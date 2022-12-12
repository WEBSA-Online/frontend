import Card from "@mui/material/Card";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {saveMany} from "../../redux/slices/stepSlice";

const OptionCard = ({ options, question }) => {
	let selected = false
	const page = useSelector((state) => state.steps.activeStep);
	const savedResponse = useSelector((state) => state.steps.responses);
	const dispatch = useDispatch();

	if (savedResponse[page] !== undefined) {
		if(savedResponse[page].find((value) => value.answer === options.name)!==undefined){
			selected = true
		}
	}

	const checkSelection =
		savedResponse[page].find((value) => value.answer === options.name) !==
		undefined;

	const checkMaxNum = savedResponse[page].length < 3;
	
	console.log(savedResponse[page].length < 3);

	const handleSave = () => {
		if (checkSelection || checkMaxNum) {
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
