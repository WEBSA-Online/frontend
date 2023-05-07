import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Button({ text, method, variant}) {
	return (
		<button className={variant} onClick={method}>
			{text}
		</button>
	);
}

export default Button;
