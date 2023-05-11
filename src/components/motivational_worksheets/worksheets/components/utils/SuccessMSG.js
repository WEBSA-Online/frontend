import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function SuccessMsg({ divclass, iconclass, textclass, type }) {
	return (
		<div className={divclass}>
			<FontAwesomeIcon icon={faCircleCheck} className={iconclass} />
			{type === "add" ? (
				<p className={textclass}>Data successfully submitted</p>
			) : type === "edit" ? (
				<p className={textclass}>Data edited successfully : </p>
			) : (
				<p className={textclass}>Data deleted successfully</p>
			)}
		</div>
	);
}

export default SuccessMsg;
