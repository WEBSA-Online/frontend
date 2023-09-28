import { Stack } from "@mui/material";
import React from "react";

function ContactUs() {
	return (
		<div className="min-h-[450px] bg-slate-100 py-10">
			<div className="w-full md:w-[70%] md:mx-auto md:px-0 px-5">
				<Stack spacing={2} className="p-5 bg-white">
					<p className="font-websa-regular text-lg">
						If you have any queries or questions regarding these worksheets, feel free
						to communicate them to us through your comments.
					</p>
					<p className="font-websa-bold text-lg">Send your comments to the
						principal investigator Prof Nazarius Mbona Tumwesigye naz@musph.ac.ug or
						tel 0782447771/0703447771.
					</p>
				</Stack>
			</div>
		</div>
	);
}

export default ContactUs;
