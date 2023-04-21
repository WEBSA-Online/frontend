import React from "react";

export default function Home() {
	return (
		<div className="mt-6 divide-y">
			<div className="bg-slate-200 p-6 rounded-t-lg">
				<p className="font-websa-bold text-xl">Practical Advice</p>
			</div>
			<div spacing={2} className="bg-white p-6">
				<p className="mt-2">
					Here we provide you with clues on how to react when in tempting situations
					and this depends on the information you have so far provided from the
					screening assessment, the baseline, midline and weekly communications.
				</p>
				<p className="mt-2">
					A common example is when friends want to buy you excessive alcohol. You may
					say your family has a history of diabetes or hypertension or just alcohol
					addiction and thus you can’t take the offer.
				</p>
				<p className="mt-2">
					You thank the friends and express hope to meet them again. You are further
					advised to improve self-efficacy beliefs and implementation intentions
					through acknowledging your success, observing your mentors, getting
					positive feedback, and practicing positive self-talk.
				</p>
				<p className="mt-2">
					Recording the incidents of alcohol and drug consumption helps monitor your
					progress to abstinence or reduction of alcohol/drug use disorder.
				</p>
			</div>
		</div>
	);
}
