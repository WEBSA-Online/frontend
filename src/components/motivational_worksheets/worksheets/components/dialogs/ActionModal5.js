import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle, Stack, Tooltip } from "@mui/material";
import Button from "../buttons/Button";
import ButtonAdd from "../buttons/ButtonAdd";
import InputForm from "../InpurForm";
import { useSubmit } from "../../hooks/APIdata";
import Loader from "../utils/Loader";
import ShowError from "../utils/ErrorMsg";
import ShowSuccess from "../utils/SuccessMSG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Additem({
	buttonText,
	title,
	items,
	type,
	formValue,
	formNum,
	index,
}) {
	const [open, setOpen] = React.useState(false);
	const [flip, setFlip] = React.useState(false);
	const [inputChange, setChange] = React.useState(
		formValue.change === "" ? "" : formValue.change
	);
	const [positiveOne, setPositiveOne] = React.useState(
		formValue.positiveOne === "" ? "" : formValue.positiveOne
	);
	const [negativeOne, setNegativeOne] = React.useState(
		formValue.negativeOne === "" ? "" : formValue.negativeOne
	);
	const [positiveTwo, setPositiveTwo] = React.useState(
		formValue.positiveTwo === "" ? "" : formValue.positiveTwo
	);
	const [negativeTwo, setNegativeTwo] = React.useState(
		formValue.negativeTwo === "" ? "" : formValue.negativeTwo
	);

	const [formError, setFormError] = React.useState({ status: false, msg: "" });

	const { submitData, loading, error, closeAPIerror, success, closeSuccessMsg } =
		useSubmit();

	const formData = {
		noChange: {positive: positiveOne, negative: negativeOne },
		change: { positive: positiveTwo, negative: negativeTwo },
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
		if (
			(inputChange === "" ||
				positiveOne === "" ||
				negativeOne === "" ||
				positiveTwo === "" ||
				negativeTwo === "") &&
			(type !== "delete" || type !== "edit")
		) {
			setFormError({ status: true, msg: "Cannot submit empty input"});
		} else {
			if (type === "add") {
				items.push(formData);
			} else if (type === "edit") {
				items.splice(index, 1);
				items.splice(index, 0, formData);
			} else if (type === "delete") {
				items.splice(index, 1);
			}
			const newData = {
				worksheet_6: items,
			};
			submitData(newData);
			setTimeout(() => {
				closeSuccessMsg();
				handleClose();
			}, 2000);
		}
	};

	return (
		<div>
			{type === "add" ? (
				<ButtonAdd text={buttonText} method={handleClickOpen} />
			) : type === "edit" ? (
				<Tooltip title="Edit">
					<FontAwesomeIcon
						icon={faPencil}
						className="mr-3 text-zinc-700 hover:text-orange-500 text-sm sm:text-sm cursor-pointer"
						onClick={handleClickOpen}
					/>
				</Tooltip>
			) : (
				<Tooltip title="Delete item">
					<FontAwesomeIcon
						icon={faTrash}
						className="mr-3 text-zinc-700 hover:text-red-700 text-sm sm:text-sm cursor-pointer"
						onClick={handleClickOpen}
					/>
				</Tooltip>
			)}

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<div className="sm:w-[500px]"></div>

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
									type={type}
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
						<DialogContent>
							{type === "delete" ? (
								<>
									<p>Are you sure you want to delete this item?</p>
									<Stack direction="row" className="mt-4">
										<Button method={handleSubmit} text="Delete" variant="contained" />
										<span className="mx-1"></span>
										<Button method={handleClose} text="Cancel" variant="outlined" />
									</Stack>
								</>
							) : flip === false ? (
								<>
									<Stack spacing={2}>
										<h4>What would happen with no change of behavior</h4>
										<InputForm
											type="text"
											placeholder="Enter advantage e.g keeping of social circles"
											setInputText={setPositiveOne}
											error={error.status === true ? error.status : formError.status}
											defaultValue={positiveOne}
										/>
										<InputForm
											type="text"
											placeholder="Enter negative outcome"
											setInputText={setNegativeOne}
											error={error.status === true ? error.status : formError.status}
											defaultValue={negativeOne}
										/>
										<div className="w-1/2">
											<Button method={setFlip} text="Next" variant="contained" />
										</div>
									</Stack>
								</>
							) : (
								<>
									<Stack spacing={2}>
										<h4>What would happen with a change of behavior</h4>
										<InputForm
											type="text"
											placeholder="Enter advantage e.g increased savings"
											setInputText={setPositiveTwo}
											error={error.status === true ? error.status : formError.status}
											defaultValue={positiveTwo}
										/>
										<InputForm
											type="text"
											placeholder="Enter negative outcome"
											setInputText={setNegativeTwo}
											error={error.status === true ? error.status : formError.status}
											defaultValue={negativeTwo}
										/>
									</Stack>
									<Stack direction="row" className="mt-4">
										<Button method={handleSubmit} text="Submit" variant="contained" />
										<span className="mx-1"></span>
										<Button method={handleClose} text="Cancel" variant="outlined" />
									</Stack>
								</>
							)}
						</DialogContent>
					</>
				)}
			</Dialog>
		</div>
	);
}
