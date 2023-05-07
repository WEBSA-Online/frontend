import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

	// <FontAwesomeIcon icon={faArrowLeft} className="text-green-400" />;

function DisplayStars({rating}) {
   const total = 10;

   const active = Array.from({ length: rating});
   const inactive = Array.from({ length: total - rating });

	return (
		<div class="mt-1 text-sm flex items-center">
			{active.map((_, index) => (
				<FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400" />
			))}
			{inactive.map((_, index) => (
				<FontAwesomeIcon key={index} icon={faStar} className="text-slate-300" />
			))}{" "}
			<span className="text-slate-500 ml-2">
				{rating}/{total}
			</span>
		</div>
	);
}

export default DisplayStars;
