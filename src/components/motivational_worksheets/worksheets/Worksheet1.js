import React from "react";
import { Stack, Tooltip } from "@mui/material";
import DisplayStars from "./components/ratings/ReadOnly";
import Grid from "@mui/material/Unstable_Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPencil,
	faTrash,
	faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {useWorksheets} from "./hooks/APIdata";
import Empty from "./components/Empty"
import ActionPoint from "./components/ActionPoint"
import Additem from "./components/Additem"
import Loader from "./components/utils/Loader"

function Worksheet1({page}) {

	const { data, loading, error } = useWorksheets();

	let items = []


	if(loading === false && error.status===false) {
		items = data.worksheet_1.filter((value) => {
			return value;
		});
	}


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
			<div class="mt-5 flex justify-center">
				<div className="w-[95%]">
					<div className="rounded-t-lg py-3 px-5 w-full bg-gray-200 flex justify-between items-center">
						<p className="text-sm text-black font-websa-bold">My Enlisted Changes</p>
						{(loading === false && error.status === false && items.length === 0) ||
						error.status === true ? null : (
							<Additem buttonText="Add item" title="Add Item" items={items} />
						)}
					</div>

					{loading === true ? (
						<Loader
							iconclass="animate-spin mr-3 text-websa-red text-2xl cursor-pointer"
							divclass="py-10 flex justify-center"
						/>
					) : error.status === true ? (
						<div className="py-10 flex flex-col items-center justify-center">
							<FontAwesomeIcon
								className="text-2xl text-red-700"
								icon={faTriangleExclamation}
							/>
							<p>{error.msg}</p>
						</div>
					) : items.length === 0 ? (
						<Empty text="Add item" items={items} />
					) : (
						<div className="divide-y border">
							{items.map((value, index) => {
								return (
									<Grid key={index} container spacing={0} className="py-3 px-4">
										<Grid xs={12} sm={9}>
											<p className="text-base">{index+1}. {value.text}</p>
											<DisplayStars rating={value.ratings} />
										</Grid>
										<Grid
											xs={12}
											sm={3}
											className="flex justify-start sm:justify-end pt-4 mt-3 sm:mt-2"
										>
											<Tooltip title="Edit">
												<FontAwesomeIcon
													icon={faPencil}
													className="mr-3 text-zinc-700 hover:text-orange-500 text-sm sm:text-sm cursor-pointer"
												/>
											</Tooltip>
											<Tooltip title="Delete item">
												<FontAwesomeIcon
													icon={faTrash}
													className="mr-3 text-zinc-700 hover:text-red-700 text-sm sm:text-sm cursor-pointer"
												/>
											</Tooltip>
										</Grid>
									</Grid>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Worksheet1;
