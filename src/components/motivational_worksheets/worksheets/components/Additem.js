import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {DialogTitle, Stack} from "@mui/material";
import Button from "./buttons/Button";
import ButtonAdd from "./buttons/ButtonAdd";
import InputForm from "./InpurForm";
import RatingsForm from "./ratings/AddRating";

export default function Additem({text, title }) {
	const [open, setOpen] = React.useState(false);
	const [rating, setRating] = React.useState(2);
	const [inputText, setInputText] = React.useState("");
	let array = [];

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const formData = {
		text: inputText,
		ratings: rating,
	};

	const submitdata =()=> {
		
	}

	return (
		<div>
			<ButtonAdd text={text} method={handleClickOpen} />
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<div className="w-[90%] sm:w-[500px]"></div>
				<DialogTitle>
					<h1>{title}</h1>
				</DialogTitle>
				<DialogContent className="px-2">
					<InputForm type="text" placeholder="Enter change here" />
					<RatingsForm rating={rating} setRating={setRating} />
					<Stack direction="row" className="mt-3.5">
						<Button method={handleClose} text="submit" variant="contained" />
						<span className="mx-1"></span>
						<Button method={handleClose} text="cancel" variant="outlined" />
					</Stack>
				</DialogContent>
			</Dialog>
		</div>
	);
}
