import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonAdd from "./ButtonAdd";
import InputForm from "./InpurForm"
import RatingsForm from "./ratings/AddRating"

export default function Additem({text, title}) {
	const [open, setOpen] = React.useState(false);
   const [rating, setRating] = React.useState(2);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose} autoFocus>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
