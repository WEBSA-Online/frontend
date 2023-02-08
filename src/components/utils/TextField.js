import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { saveResponse } from "../../redux/slices/stepSlice";

export default function BasicTextFields({details}) {
   const page = useSelector((state) => state.steps.activeStep);
			const savedResponse = useSelector((state) => state.steps.responses);
			const dispatch = useDispatch();

			console.log(savedResponse[page].answer)
			

			let isAnsPresent = false;
			if (savedResponse[page] !== undefined) {
				isAnsPresent = true;
			}

			const handleSave = (e) => {
				const selected = e.target.value;
				dispatch(
					saveResponse({
						question: details.question,
						answer: selected,
						pageIndex: page,
					})
				);
			};
	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "100ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				defaultValue={
					savedResponse[page].answer === "Other specify" ? "Type answer" : isAnsPresent ? savedResponse[page].answer : ""
				}
				onChange={handleSave}
				variant="standard"
				size="Normal"
			/>
		</Box>
	);
}
