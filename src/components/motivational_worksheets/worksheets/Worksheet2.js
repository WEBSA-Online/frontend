import React from "react";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTriangleExclamation,
	faFaceSmile,
	faArrowRightArrowLeft,
	faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";
import { useWorksheets } from "./hooks/APIdata";
import Empty from "./components/empty/Empty2";
import ActionPoint from "./components/ActionPoint";
import ActionModal from "./components/dialogs/ActionModal2";
import Loader from "./components/utils/Loader";

function Worksheet2({ page }) {
	const { data, loading, error } = useWorksheets();

	let items = [];

	if (loading === false && error.status === false) {
		items = data.worksheet_2.filter((value) => {
			return value;
		});
	}

	return (
		<>
			<Stack className="px-5" spacing={2}>
				<p className="text-base">
					In this section, lets focus on outcomes for changes we wish to have in our
					lives. These outcomes may be good or they may feel like a sacrifice such as
					the loss of some friends. The outcomes are immediate consequences of your
					change.
				</p>
				<p className="text-base">
					Given all the information we have given you, what you already know or what
					you read about alcohol and drug use, what comes to your mind as immediate
					positive outcomes of change. Mention the changes you want to see in
					yourself (can repeat those already mentioned above) and state the expected
					outcome for each change. What is likely to happen shortly after making
					these bold changes?
				</p>
				<ActionPoint text="Mention the changes you want to see in yourself. Then list down what are the expected outcomes of each change. The outcomes may be positive or negative. " />
			</Stack>
			<div class="mt-5 flex justify-center">
				<div className="w-[95%]">
					<div className="rounded-t-lg py-3 px-5 w-full bg-gray-200 flex justify-between items-center">
						<p className="text-sm text-black font-websa-bold">My Enlisted Changes</p>
						{(loading === false && error.status === false && items.length === 0) ||
						error.status === true ? null : (
							<ActionModal
								formValue=""
								type="add"
								buttonText="Add item"
								title="Add Item"
								items={items}
							/>
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
									<Grid container spacing={0} className="py-3 px-4">
										<Grid xs={12} sm={10}>
											<Stack spacing={2} className="divide-y">
												<p className="text-base pt-1">
													<strong>
														{" "}
														<FontAwesomeIcon
															icon={faArrowRightArrowLeft}
															className="mr-2 text-zinc-700 text-websa-red text-sm sm:text-sm cursor-pointer"
														/>
														Change:
													</strong>{" "}
													{value.change}
												</p>

												<p className="text-base pt-1">
													<strong>
														{" "}
														<FontAwesomeIcon
															icon={faFaceSmile}
															className="mr-2 text-zinc-700 text-websa-red text-sm sm:text-sm cursor-pointer"
														/>
														Postive:
													</strong>{" "}
													{value.positive}
												</p>

												<p className="text-base pt-1">
													<strong>
														{" "}
														<FontAwesomeIcon
															icon={faFaceFrown}
															className="mr-2 text-zinc-700 text-websa-red text-sm sm:text-sm cursor-pointer"
														/>
														Negative
													</strong>{" "}
													{value.negative}
												</p>
											</Stack>
										</Grid>
										<Grid
											xs={12}
											sm={2}
											className="flex justify-start sm:justify-end pt-4 mt-3 sm:mt-2"
										>
											<ActionModal
												formValue={value}
												type="edit"
												title="Edit Item"
												items={items}
												index={index}
											/>
											<ActionModal
												formValue={value}
												type="delete"
												title="Delete Item"
												items={items}
												index={index}
											/>
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

export default Worksheet2;
