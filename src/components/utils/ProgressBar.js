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
	handleSkip,
	resetStep,
	resetResponses,
	updateSteps,
	updateBaselineSteps,
} from "../../redux/slices/stepSlice";
import {
	endProcess,
	enableTimer,
	showTool2page,
	showTool3page,
} from "../../redux/slices/globalstateSlice";

export default function ProgressMobileStepper() {
	const theme = useTheme();
	const page = useSelector((state) => state.steps.activeStep);
	const assesmentOneSteps = useSelector((state) => state.steps.assesmentOneSteps);
	const baselineSteps = useSelector((state) => state.steps.baselineSteps);
	const savedResponse = useSelector((state) => state.steps.responses);
	const dispatch = useDispatch();
	const pathname = window.location.pathname;
	const totalpages = pathname === "/baseline" ? baselineSteps : assesmentOneSteps;


	console.log("total pages",totalpages);

	const gotoNextPage = () => {
		if (
			savedResponse[page].answer === "I decline" ||
			savedResponse[page].answer === "Not at all comfortable"
		) {
			dispatch(resetStep(0));
			dispatch(resetResponses());
			dispatch(endProcess());
		} else if (savedResponse[page].answer === "I accept") {
			dispatch(enableTimer());
			dispatch(handleNext());
		} else if (
			page===19 &&
			pathname === "/baseline" &&
			savedResponse[page].answer === "No"
		) {
			dispatch(handleSkip(2));
		} else if (
			page === 11 &&
			pathname !== "/baseline" &&
			savedResponse[page].answer === "Never"
		) {
			dispatch(showTool3page());
			dispatch(handleSkip(10));
		} else if (
			page === 21 &&
			pathname !== "/baseline" &&
			savedResponse[page].answer === "Never"
		) {
			dispatch(handleSkip(10));
		} else if (
			savedResponse[10] !== undefined &&
			page === 10 &&
			pathname !== "/baseline"
		) {
			dispatch(showTool2page());
			dispatch(handleNext());
		} else if (
			savedResponse[20] !== undefined &&
			page === 20 &&
			pathname !== "/baseline"
		) {
			dispatch(showTool3page());
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
			: savedResponse[page] === null
			? false
			: savedResponse[page].length === 0
			? false
			: savedResponse[page].answer === ""
			? false
			: null;

	return (
		<MobileStepper
			variant="progress"
			steps={totalpages}
			position="static"
			activeStep={page}
			sx={{ flexGrow: 1, justifyContent: "center", width: "70%"}}
			nextButton={
				<Button
					sx={{
						color: "white",
						boxShadow: "none",
						fontWeight: "bold",
						marginLeft: "5px",
					}}
					variant="contained"
					size="medium"
					onClick={gotoNextPage}
					disabled={page === totalpages - 1 || checkCondition === false}
				>
					{page === totalpages - 1 ? "End" : "Next"}
					{theme.direction === "rtl" ? (
						<KeyboardArrowLeft />
					) : (
						<KeyboardArrowRight />
					)}
				</Button>
			}
			backButton={
				<Button
					onClick={() => dispatch(handleBack())}
					disabled={page === 0}
					variant="contained"
					size="medium"
					sx={{
						color: "white",
						boxShadow: "none",
						fontWeight: "bold",
						marginRight: "5px",
					}}
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
