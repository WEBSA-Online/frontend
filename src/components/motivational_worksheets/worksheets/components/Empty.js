import React from "react";
import ActionModal from "./ActionModal";

function Empty({ text, items }) {
	return (
		<div className="bg-gray-100 py-5 sm:py-8 px-4 border-2 border-dashed border-gray-400 flex justify-center">
			<ActionModal formValue="" type="add" buttonText="Add item" title="Add Item" items={items} />
		</div>
	);
}

export default Empty;
