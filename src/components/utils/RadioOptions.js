import * as React from "react";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { checkButton } from "../../redux/slices/globalstateSlice";
import { saveResponse } from "../../redux/slices/stepSlice";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";

export default function IconsRadio({ details }) {
	const page = useSelector((state) => state.steps.activeStep);
	const savedResponse = useSelector((state) => state.steps.responses);
	const dispatch = useDispatch();
	const itemWidth = 100 / details.options.length;

	const handleClick = (e) => {
		const selected = e.target.value;
		dispatch(checkButton());
		dispatch(
			saveResponse({
				question: details.question,
				answer: selected,
				pageIndex: page,
				isChecked: true,
			})
		);
	};


	return (
		<RadioGroup
			aria-label="platform"
			overlay
			defaultValue={
				savedResponse[page] === undefined ? "" : savedResponse[page].answer
			}
			name="platform"
			sx={{
				flexDirection: details.direction,
				gap: 2,
				[`& .${radioClasses.checked}`]: {
					[`& .${radioClasses.action}`]: {
						inset: -1,
						border: "3px solid",
						borderColor: "green",
					},
					color: "green",
				},
			}}
		>
			<Grid container spacing={2} sx={{ width: "100%" }}>
				{details.options.map((value, index) => (
					<Grid key={index} xs={6} md={4}>
						<Sheet
							key={index}
							variant="contained"
							sx={{
								borderRadius: "md",
								bgcolor: "white",
								boxShadow: "sm",
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								gap: 1.5,
								p: 2,
							}}
						>
							<Radio
								id={value.name}
								value={value.name}
								name="platform"
								checkedIcon={<CheckCircleRoundedIcon />}
								onClick={(e) => handleClick(e)}
							/>
							<span style={{ fontSize: "20px" }}>{value.name}</span>
						</Sheet>
					</Grid>
				))}
			</Grid>
		</RadioGroup>
	);
}
