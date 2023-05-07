import React from "react";
import Rating from "@mui/material/Rating";

function DisplayStars({rating}) {
   const total = 10;

   // const active = Array.from({ length: rating});
   // const inactive = Array.from({ length: total - rating });

	return (
		<div class="mt-1 text-sm flex items-center">
			<Rating name="read-only" value={rating} size="small" max={total} readOnly />
			<span className="text-slate-500 ml-2">
				{rating}/{total}
			</span>
		</div>
	);
}

export default DisplayStars;
