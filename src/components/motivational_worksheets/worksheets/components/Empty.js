import React from "react";
import ButtonAdd from "./ButtonAdd";

function Empty({text}) {
	return (
		<div className="bg-gray-100 py-5 sm:py-8 px-4 rounded-lg border-2 border-dashed border-gray-400 flex justify-center">
			<ButtonAdd text={text}/>
		</div>
	);
}

export default Empty;
