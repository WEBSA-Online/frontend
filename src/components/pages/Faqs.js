import React from "react";
import FAQsAccordion from "../landingsection/FAQsAccordion"

function FAQs() {
	return (
		<div className="min-h-[450px] bg-slate-100 py-10">
			<div className="w-full md:w-[70%] md:mx-auto md:px-0 px-5">
				<FAQsAccordion />
			</div>
		</div>
	);
}

export default FAQs;
