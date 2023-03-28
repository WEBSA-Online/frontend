import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { addDays, subYears } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { saveResponse } from "../../redux/slices/stepSlice";
import moment from "moment";
import Button from "@mui/material/Button";

export default function ResponsiveDatePickers() {
	const page = useSelector((state) => state.steps.activeStep);	
	const [showBtn, setShowBtn] = React.useState(false);
	const dispatch = useDispatch();
	const [value, setValue] = React.useState("2003-01-01");

	const saveDateOfBirth = () => {
		dispatch(
			saveResponse({
				question: "What is your Date Of Birth",
				answer: moment(value._d).format(),
				pageIndex: page,
				isChecked: true,
			})
		);
		setShowBtn(false);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<Stack sx={{ backgroundColor: "white", width: "70%" }}>
				<DatePicker
					disableFuture
					openTo="year"
					views={["year", "month", "day"]}
					minDate={subYears(new Date("January 1, 2003 00:00:00 GMT"), 5)}
					maxDate={subYears(new Date("December 31, 2008 00:00:00 GMT"), 5)}
					value={value}
					onChange={(newValue) => {
						setValue(newValue);
						setShowBtn(true);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</Stack>
			{showBtn === true ? (
				<Button
					onClick={saveDateOfBirth}
					sx={{ marginTop: "10px" }}
					size="sm"
					variant="contained"
				>
					I'm done
				</Button>
			) : null}
		</LocalizationProvider>
	);
}
