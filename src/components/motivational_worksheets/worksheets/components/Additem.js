import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle, Stack } from "@mui/material";
import Button from "./buttons/Button";
import ButtonAdd from "./buttons/ButtonAdd";
import InputForm from "./InpurForm";
import RatingsForm from "./ratings/AddRating";
import { useSubmit } from "../hooks/APIdata";
import Loader from "./utils/Loader";
import ShowError from "./utils/ErrorMsg";
import ShowSuccess from "./utils/SuccessMSG";

export default function Additem({ buttonText, title, items}) {
	const [open, setOpen] = React.useState(false);
	const [rating, setRating] = React.useState(5);
	const [inputText, setInputText] = React.useState("");
	const [formError, setFormError] = React.useState({ status: false, msg: "" });

	const { submitData, loading, error, closeAPIerror, success, closeSuccessMsg } =
		useSubmit();

	const formData = {
		text: inputText,
		ratings: rating,
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const closeError = () => {
		setFormError({ ...formError, status: false });
	};

	const handleSubmit = () => {
		if (inputText === "") {
			setFormError({ status: true, msg: "Cannot submit empty input" });
		} else {
			items.push(formData);
			const newData = {
				worksheet_1: items,
			};
			submitData(newData);
			setTimeout(() => {
				closeSuccessMsg();
				handleClose();
			}, 3000);
		}
	};

	return (
		<div>
			<ButtonAdd text={buttonText} method={handleClickOpen} />
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<div className="w-[90%] sm:w-[500px]"></div>

				{loading === true ? (
					<Loader
						iconclass="animate-spin mr-3 text-websa-red text-5xl cursor-pointer"
						divclass="py-20 flex justify-center"
					/>
				) : (
					<>
						<DialogTitle>
							{success === true ? (
								<ShowSuccess
									textclass="text-white"
									iconclass="mr-2 text-lg cursor-pointer text-white"
									divclass="rounded mb-3 flex w-full items-center py-1 px-4 bg-green-600"
									ErrMsg={error.status === true ? error.msg : formError.msg}
									method={error.status === true ? closeAPIerror : closeError}
								/>
							) : null}

							{error.status === true || formError.status === true ? (
								<ShowError
									textclass="text-white"
									iconclass="text-base cursor-pointer text-white"
									divclass="rounded mb-3 flex justify-between w-full items-center py-1 px-4 bg-red-600"
									ErrMsg={error.status === true ? error.msg : formError.msg}
									method={error.status === true ? closeAPIerror : closeError}
								/>
							) : null}
							<h1>{title}</h1>
						</DialogTitle>
						<DialogContent className="px-2">
							<InputForm
								type="text"
								placeholder="Enter change here"
								setInputText={setInputText}
								error={error.status === true ? error.status : formError.status}
							/>
							<RatingsForm rating={rating} setRating={setRating} />
							<Stack direction="row" className="mt-4">
								<Button method={handleSubmit} text="Submit" variant="contained" />
								<span className="mx-1"></span>
								<Button method={handleClose} text="Cancel" variant="outlined" />
							</Stack>
						</DialogContent>
					</>
				)}
			</Dialog>
		</div>
	);
}
