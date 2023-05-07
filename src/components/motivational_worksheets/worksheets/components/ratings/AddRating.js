import React from "react";
import Rating from "@mui/material/Rating";

function DisplayStars({rating, setRating}) {
	const total = 10;

	// const active = Array.from({ length: rating});
	// const inactive = Array.from({ length: total - rating });

	return (
		<div class="mt-4 flex flex-col">
			<label className="text-slate-900 text-sm">Rate this change out of 10</label>
			<div className="flex items-center">
				<Rating
					value={rating}
					className="mt-1.5"
					max={total}
					onChange={(event, newValue) => {
						setRating(newValue);
					}}
				/>
				<span className="text-slate-500 ml-2 mt-2">
					{rating}/{total}
				</span>
			</div>
		</div>
	);
}

export default DisplayStars;
