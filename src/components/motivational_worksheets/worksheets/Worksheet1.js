import React from "react";
import { Stack, Tooltip } from "@mui/material";
import DisplayStars from "./components/DisplayStars";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import useWorksheets from "./hooks/Fetchdata";
import Empty from "./components/Empty"
import ActionPoint from "./components/ActionPoint"

function One() {

	const { data, loading, error } = useWorksheets();


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
				<ActionPoint
					text="Enlist the changes
					you wish to see in yourself. Then rate from 1 to 10, how important are
					these changes."
				/>
			</Stack>
			<div class="mt-5 px-5 sm:pl-9">
				{/* <Grid container spacing={1} className="bg-zinc-100 py-3 px-4">
					<Grid xs={12} sm={9}>
						<p>
							1. Enlist the changes you wish to see in yourself. Then rate from 1 to
							10, how important are these changes.
						</p>
						<DisplayStars />
					</Grid>
					<Grid xs={12} sm={3} className="flex justify-end pt-4 sm:mt-2">
						<Tooltip title="Edit">
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
				<button className="button-small mt-3">
					{" "}
					<FontAwesomeIcon icon={faPlus} className="mr-1 text-white text-sm" />
					Add Change
				</button> */}
			</div>
		</>
	);
}

export default One;
