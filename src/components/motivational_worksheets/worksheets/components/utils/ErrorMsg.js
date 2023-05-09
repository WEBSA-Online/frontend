import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ErrorMsg({ divclass, iconclass, textclass, ErrMsg, method}) {
	return (
		<div className={divclass}>
			<p className={textclass}>{ErrMsg}</p>
			<FontAwesomeIcon icon={faXmark} className={iconclass} onClick={method}/>
		</div>
	);
}

export default ErrorMsg
