import React from "react";
import Lottie from "lottie-react";
import star from "../../../../lottie/star";

function ActionPoint({text}) {
	return (
		<div>
			<span className="flex items-start sm:items-center">
				<Lottie animationData={star} loop={true} className="w-[50%] sm:w-[4%]" />
				<p class="text-base">
					<span className="font-websa-bold">Action Point:</span> {text}
				</p>
			</span>
		</div>
	);
}

export default ActionPoint;
