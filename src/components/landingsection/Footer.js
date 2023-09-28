import moment from "moment";
import React from "react";

const Footer = () => {
	return (
		<div className="mt-3 bg-white py-2 px-2 container mx-auto sm:px-0 md:flex justify-between items-center">
			<p className="text-base font-websa-regular">
				©{moment().format("YYYY")} websa online. All rights reserved
			</p>
			<p className="text-base font-websa-regular">
				Photo credits:{" "}
				<a className="text-websa-red" href="https://unsplash.com">
					unsplash.com
				</a>
			</p>
		</div>
	);
};

export default Footer;
