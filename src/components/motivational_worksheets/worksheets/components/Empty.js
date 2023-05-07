import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Empty({text}) {
	return (
		<div className="bg-gray-100 py-5 sm:py-8 px-4 rounded-lg border-2 border-dashed border-gray-400 flex justify-center">
			<button className="button-small mt-3">
				{" "}
				<FontAwesomeIcon icon={faPlus} className="mr-1 text-white text-sm" />
				{text}
			</button>
		</div>
	);
}

export default Empty;
