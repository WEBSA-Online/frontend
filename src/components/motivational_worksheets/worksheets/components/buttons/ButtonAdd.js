import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ButtonAdd({text, method}) {
  return (
			<button className="button-small" onClick={method}>
				{" "}
				<FontAwesomeIcon icon={faPlus} className="mr-1 text-white text-xs" />
				{text}
			</button>
		);
}

export default ButtonAdd
