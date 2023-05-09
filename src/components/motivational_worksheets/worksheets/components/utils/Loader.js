import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loader({iconclass, divclass}) {
  return (
			<div className={divclass}>
				<FontAwesomeIcon
					icon={faSpinner}
					className={iconclass}
				/>
			</div>
		);
}

export default Loader
