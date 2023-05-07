import React from "react";
import { Stack, Tooltip } from "@mui/material";
import Lottie from "lottie-react";
import star from "../../../lottie/star";
import DisplayStars from "./components/DisplayStars"
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

function One() {
   const Item = styled(Paper)(({ theme }) => ({
				backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
				...theme.typography.body2,
				padding: theme.spacing(1),
				textAlign: "center",
				color: theme.palette.text.secondary,
			}));
	return (
		<>
			<Stack className="px-5" spacing={2}>
				<p className="text-base">
					Our life keeps changing. Your health status last year may not be the same
					this year. Your financial position last year may not be the same this year.
					Same with friends and your whole social life. Therefore, to cope with the
					fast-changing world we may feel we have to change either at the same pace
					or sometimes even faster.
				</p>
				<div>
					<span className="flex items-center">
						<Lottie animationData={star} loop={true} className="w-[20%] sm:w-[5%]" />
						<h1 class="text-lg">Action Point</h1>
					</span>
					<p class="sm:ml-4">
						Enlist the changes you wish to see in yourself. Then rate from 1 to 10,
						how important are these changes.
					</p>
				</div>
			</Stack>
			<div class="mt-5 px-5 sm:pl-9">
				<Grid container spacing={1} className="bg-zinc-100 py-3 px-4">
					<Grid xs={12} sm={9}>
						<p>
							1. Enlist the changes you wish to see in yourself. Then rate from 1 to
							10, how important are these changes.
						</p>
						<DisplayStars />
					</Grid>
					<Grid xs={12} sm={3} className="flex justify-end pt-4">
						<Tooltip title="Edit item">
							<FontAwesomeIcon
								icon={faPencil}
								className="mr-3 text-zinc-700 hover:text-orange-500 text-base cursor-pointer"
							/>
						</Tooltip>
						<Tooltip title="Delete item">
							<FontAwesomeIcon
								icon={faTrash}
								className="mr-3 text-zinc-700 hover:text-red-700 text-base cursor-pointer"
							/>
						</Tooltip>
					</Grid>
				</Grid>

				<button className="button-small mt-3">Add Change</button>
			</div>
		</>
	);
}

export default One;
