import * as React from "react";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { checkButton } from "../../redux/slices/globalstateSlice";
import { saveResponse } from "../../redux/slices/stepSlice";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";

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


	return details.options2 ? (
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
			<Stack spacing={2} direction="row">
				<div>
					{" "}
					{details.options.map((value, index) => {
						return (
							<>
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
										gap: 2,
										p: 2,
										marginBottom: "10px",
									}}
								>
									<Radio
										id={value.value}
										value={value.value}
										checkedIcon={<CheckCircleRoundedIcon />}
										onClick={(e) => handleClick(e)}
									/>
									<span style={{ fontSize: "20px" }}>{value.name}</span>
								</Sheet>
							</>
						);
					})}
				</div>
				<div>
					{" "}
					{details.options2.map((value, index) => {
						return (
							<>
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
										gap: 2,
										p: 2,
										marginBottom: "10px",
									}}
								>
									<Radio
										id={value.value}
										value={value.value}
										checkedIcon={<CheckCircleRoundedIcon />}
										onClick={(e) => handleClick(e)}
									/>
									<span style={{ fontSize: "20px" }}>{value.name}</span>
								</Sheet>
							</>
						);
					})}
				</div>
			</Stack>
		</RadioGroup>
	) : (
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
			{details.options.map((value, index) => (
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
						width: `${itemWidth}%`,
					}}
				>
					<Radio
						id={value.value}
						value={value.value}
						checkedIcon={<CheckCircleRoundedIcon />}
						onClick={(e) => handleClick(e)}
					/>
					<span style={{ fontSize: "20px" }}>{value.name}</span>
				</Sheet>
			))}
		</RadioGroup>
	);
}
