import React from "react";

const SelectFilter = ({ setMethod, options}) => {
	return (
		<select
			placeholder="Baseline"
			onChange={(e) => setMethod(e.target.value)}
			className="mx-2 border rounded-md px-2 py-1 bg-slate-50"
		>
			<option value="">Show All</option>
			{options.map((value) => (
				<option value={value.bool}>{value.value}</option>
			))}
		</select>
	);
};

export default SelectFilter;
