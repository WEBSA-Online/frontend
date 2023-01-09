import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";
import {
	handleNext,
	handleBack,
	resetStep,
	resetResponses,
} from "../../redux/slices/stepSlice";
import {
	endProcess,
	enableTimer,
	showTool2page,
} from "../../redux/slices/globalstateSlice";

export default function ProgressMobileStepper() {
	const theme = useTheme();
	const page = useSelector((state) => state.steps.activeStep);
	const totalpages = useSelector((state) => state.steps.totalSteps);
	const isChecked = useSelector((state) => state.globalstate.isChecked);
	const savedResponse = useSelector((state) => state.steps.responses);
	const dispatch = useDispatch();

	const gotoNextPage = () => {
		if (
			savedResponse[page].answer === "declined" ||
			savedResponse[page].answer === "Not at all comfortable"
		) {
			dispatch(resetStep(0));
			dispatch(resetResponses());
			dispatch(endProcess());
		} else if (savedResponse[page].answer === "accepted") {
			dispatch(enableTimer());
			dispatch(handleNext());
		} else if (savedResponse[10] !== undefined && page===10) {
			dispatch(showTool2page());
			dispatch(handleNext());
		} else {
			dispatch(handleNext());
		}
	};

	const checkCondition =
		   savedResponse.length === 0
			? false
			: savedResponse[page] === undefined
			? false
			: savedResponse[page].length === 0
			? false
			: savedResponse[page].answer === ""
			? false
			: null;

			console.log('check condition', checkCondition);

	return (
		<MobileStepper
			variant="progress"
			steps={totalpages}
			position="static"
			activeStep={page}
			sx={{ flexGrow: 1, justifyContent: "center", width: "70%" }}
			nextButton={
				<Button
					sx={{ color: "black" }}
					size="small"
					onClick={gotoNextPage}
					disabled={
						page === totalpages - 1 ||
						(checkCondition === false && isChecked === false)
					}
				>
					Next
					{theme.direction === "rtl" ? (
						<KeyboardArrowLeft />
					) : (
						<KeyboardArrowRight />
					)}
				</Button>
			}
			backButton={
				<Button
					sx={{ color: "black" }}
					size="small"
					onClick={() => dispatch(handleBack())}
					disabled={page === 0}
				>
					{theme.direction === "rtl" ? (
						<KeyboardArrowRight />
					) : (
						<KeyboardArrowLeft />
					)}
					Back
				</Button>
			}
		/>
	);
}
