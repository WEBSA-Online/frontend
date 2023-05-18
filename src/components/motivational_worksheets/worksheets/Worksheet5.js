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
import Empty from "./components/empty/Empty5";
import ActionPoint from "./components/ActionPoint";
import ActionModal from "./components/dialogs/ActionModal5";
import Loader from "./components/utils/Loader";

function Worksheet5({ page }) {
	const { data, loading, error } = useWorksheets();

	let items = [];

	if (loading === false && error.status === false) {
		items = data.worksheet_6.filter((value) => {
			return value;
		});
	}

	return (
		<>
			<Stack className="px-5" spacing={2}>
				<p className="text-base">
					In this section we engage you in decision balance sheet construction. The
					worksheet has change status(Change/no change) on the left and advantage
					status (advantages/disadvantages) on the top. This is meant to help you
					analyse advantages and disadvantages of changing or not. Fill relevant
					information in each box as requested.
				</p>
				<p className="text-base">
					The objective of this exercise is to enable you elicit behavioral change by
					focusing on both positive and negative aspects of not changing behavior and
					changing behavior.
				</p>
				<ActionPoint text="Fill in relevant information below" />
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
						<div className="divide-y-2 divide-teal-400 divide-dashed border">
							{items.map((value, index) => {
								return (
									<Grid key={index} container spacing={0} className="py-3 px-4">
										<Grid xs={12} sm={10}>
											<Stack spacing={2} className="divide-y">
												<p className="text-base pt-1">
													<strong>
														{" "}
														<FontAwesomeIcon
															icon={faArrowRightArrowLeft}
															className="mr-2 text-websa-red text-sm sm:text-sm cursor-pointer"
														/>
														Change Status:
													</strong>{" "}
													{value.change}
												</p>

												<p className="text-base pt-1">
													<strong>
														{" "}
														<FontAwesomeIcon
															icon={faFaceSmile}
															className="mr-2 text-websa-red text-sm sm:text-sm cursor-pointer"
														/>
														Advantage:
													</strong>{" "}
													{value.positive}
												</p>

												<p className="text-base pt-1">
													<strong>
														{" "}
														<FontAwesomeIcon
															icon={faFaceFrown}
															className="mr-2 text-websa-red text-sm sm:text-sm cursor-pointer"
														/>
														Disadvantage
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

export default Worksheet5;
