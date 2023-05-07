import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

	// <FontAwesomeIcon icon={faArrowLeft} className="text-green-400" />;

function DisplayStars() {
	const rating = 9;
   const total = 10;

   const active = Array.from({ length: rating});
   const inactive = Array.from({ length: total - rating });

	return (
		<div class="mt-1 text-sm">
			Rating:{" "}
			{active.map((_, index) => (
				<FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400" />
			))}
			{inactive.map((_, index) => (
				<FontAwesomeIcon key={index} icon={faStar} className="text-slate-300" />
			))}{" "}
			{rating}/{total}
		</div>
	);
}

export default DisplayStars;
