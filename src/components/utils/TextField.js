import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { saveResponse } from "../../redux/slices/stepSlice";

export default function BasicTextFields({ details, validationType, placeholder }) {
	const page = useSelector((state) => state.steps.activeStep);
	const savedResponse = useSelector((state) => state.steps.responses);
	const dispatch = useDispatch();
	const [error, setError] = React.useState({status:false, msg:""});

	const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
	const phoneRegex = new RegExp(/^0\d{9}$/);
	const nameRegex = new RegExp(/^[A-Za-z\s]*$/);

	console.log(savedResponse[page]);

	let isAnsPresent = false;
	if (savedResponse[page] !== undefined) {
		isAnsPresent = true;
	}

	const handleSave = (e) => {
		const selected = e.target.value;
		console.log(emailRegex.test(selected));
		if (validationType === "email" && !emailRegex.test(selected)) {
			setError({ ...error, status: true, msg: "Enter a valid emailaddress e.g example@gmai.com" });
			dispatch(
				saveResponse({
					question: details.question,
					answer: selected,
					pageIndex: page,
					validationError: emailRegex.test(selected),
				})
			);
		} else if (validationType === "fullname" && !nameRegex.test(selected)) {
			setError({ ...error, status: true, msg: "Enter your fullname and must be text only" });
			dispatch(
				saveResponse({
					question: details.question,
					answer: selected,
					pageIndex: page,
					validationError: nameRegex.test(selected),
				})
			);
		} else if (validationType === "phonenumber" && !phoneRegex.test(selected)) {
			setError({
				...error,
				status: true,
				msg: "Enter a valid phone number e.g 0774 XXXXXX",
			});
			dispatch(
				saveResponse({
					question: details.question,
					answer: selected,
					pageIndex: page,
					validationError: phoneRegex.test(selected),
				})
			);
		} else {
			setError({ ...error, status: false, msg: "" });
			dispatch(
				saveResponse({
					question: details.question,
					answer: selected,
					pageIndex: page,
				})
			);
		}
	};
	return (
		<Box component="form" noValidate autoComplete="off">
			<input
				className={`appearance-none  ${
					error.status === true
						? `border-2 border-red-600 rounded py-2 px-2 focus:border-b-2 focus:border-red-600`
						: `border-b border-black`
				} w-full sm:w-3/4 mt-5 font-websa-regular bg-transparent text-black text-lg sm:text-xl focus:outline-none`}
				placeholder={placeholder}
				type="text"
				onChange={handleSave}
				defaultValue={
					isAnsPresent
						? savedResponse[page].answer === "Other specify"
							? ""
							: savedResponse[page].answer
						: ""
				}
			/>
			{error.status ? <p className="text-red-600 mt-1">{error.msg}</p> : null}
		</Box>
	);
}
