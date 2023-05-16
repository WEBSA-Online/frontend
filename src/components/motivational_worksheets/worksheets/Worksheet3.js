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
import Empty from "./components/empty/Empty3";
import ActionPoint from "./components/ActionPoint";
import ActionModal from "./components/dialogs/ActionModal3";
import Loader from "./components/utils/Loader";

function Worksheet3({ page }) {
	const { data, loading, error } = useWorksheets();

	let items = [];

	if (loading === false && error.status === false) {
		items = data.worksheet_3.filter((value) => {
			return value;
		});
	}

	return (
		<>
			<Stack className="px-5" spacing={2}>
				<p className="text-base">
					While outcomes consist of immediate consequences ( positive and/ or
					negative), the benefits comprise of long-lived advantages or benefits of a
					particular behavioral change. In this section we request you to list all
					advantages or benefits of the changes you have mentioned. The terms
					outcomes and benefits may seem much similar to each other but a slight
					difference can be noticed between them.
				</p>
				<p className="text-base">
					For example, an individual who is a smoker, strives to quit smoking because
					it is not a healthy thing.
				</p>
				<p className="text-base">
					The outcome of quitting smoking would be that he will stop an unhealthy
					habit whereas the benefit will be the relief he gets from quitting smoking,
					the wealth created from increased savings, the more healthy life and more.
				</p>
				<ActionPoint text="List the changes you wish to see in you and the benefits of those changes in your life." />
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
									<Grid key={index} container spacing={0} className="py-3 px-4">
										<Grid xs={12} sm={10}>
											<div className="divide-y">
												<p className="text-base pt-1">
													<strong>
														{" "}
														<FontAwesomeIcon
															icon={faArrowRightArrowLeft}
															className="mr-2 text-websa-red text-sm"
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
															className="mr-2 text-websa-red text-sm"
														/>
														Postive:
													</strong>{" "}
													{value.benefit}
												</p>
											</div>
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

export default Worksheet3;
