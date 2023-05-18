import * as React from "react";
import { useSubmit } from "../../hooks/APIdata";
import Loader from "../utils/Loader";

const OptionCard = ({ option, items, index }) => {
	const { submitData, loading} = useSubmit();

	const handleSubmit = async() => {
		items.splice(index, 1);
		items.splice(index, 0, { text: option.text, selected: !option.selected});
      console.log(items)
		const newData = {
			worksheet_5: items,
		};
		await submitData(newData);
	};

	return loading === true ? (
		<Loader
			iconclass="animate-spin mr-3 text-websa-red text-2xl cursor-pointer"
			divclass="rounded-lg p-3 flex justify-center border border-slate-100 bg-slate-100"
		/>
	) : (
		<div
			className={`rounded-lg cursor-pointer p-3 ${
				option.selected === false
					? "border border-slate-100 bg-slate-100 hover:border-emerald-800 hover:bg-emerald-100"
					: "hover:text-black text-white border border-emerald-800 bg-emerald-800 hover:border-emerald-800 hover:bg-emerald-100"
			} text-base text-center transition-all`}
			onClick={handleSubmit}
		>
			{option.text}
		</div>
	);
};

export default OptionCard;
