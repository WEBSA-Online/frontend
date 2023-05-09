import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function SuccessMsg({ divclass, iconclass, textclass, ErrMsg, method }) {
	return (
		<div className={divclass}>
			<FontAwesomeIcon icon={faCircleCheck} className={iconclass} />
			<p className={textclass}>Data successfully submitted</p>
		</div>
	);
}

export default SuccessMsg;
