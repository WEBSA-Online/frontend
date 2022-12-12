import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useDispatch, useSelector } from "react-redux";
import { saveResponse } from "../../redux/slices/stepSlice";

export default function NativeSelectDemo({ details }) {
	const page = useSelector((state) => state.steps.activeStep);
	const savedResponse = useSelector((state) => state.steps.responses);
	const dispatch = useDispatch()

   let isAnsPresent = false;
   if (savedResponse[page] !== undefined) {
      isAnsPresent = true
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
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<NativeSelect
					defaultValue={isAnsPresent ? savedResponse[page].answer : 4}
					inputProps={{
						name: "age",
						id: "uncontrolled-native",
					}}
					sx={{ fontSize: "30px" }}
					onChange={handleSave}
				>
					{details.options.map((value) => {
						return <option value={value}>{value}</option>;
					})}
				</NativeSelect>
			</FormControl>
		</Box>
	);
}
