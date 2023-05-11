import React from "react";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";

const counsellors = [
	{ name: "Okidi Richard Owor", number: "0784062395", whatsapp: "256784062395" },
	{ name: "Namubiru Sylvia", number: "0758007106", whatsapp: "256758007106" },
	{ name: "Kagere Nusurah", number: "0702224054", whatsapp: "256702224054" },
	{ name: "Nabaasa Francis", number: "0705131787", whatsapp: "256705131787" },
	{ name: "Nakalanzi Margaret", number: "0774591965", whatsapp: "256774591965" },
	{ name: "Nanzige Jannet", number: "0774486804", whatsapp: "256774486804" },
];

// https:wa.me/${value.whatsapp}?text=I'm%20interested%20in%20your%20car%20for%20sale

export default function Home() {
	return (
		<div className="mt-6 divide-y">
			<div className="bg-slate-200 p-6 rounded-t-lg">
				<h1 className="font-websa-bold text-xl">Counsellors Information</h1>
			</div>

			<Stack spacing={2} className="bg-white p-6">
				<p>Tap on any contact to get in touch with any counsellor</p>
				{counsellors.map((value, index) => {
					return (
						<div key={index} className="flex w-full justify-between">
							<p>{value.name}</p>
							<div className="flex">
								<p className="mr-2">{value.number}</p>
								<a
									href={`https://wa.me/${value.whatsapp}`}
									target="_blank"
									rel="noreferrer"
								>
									<button className="button-small">Chat on whatsapp</button>
								</a>
							</div>
						</div>
					);
				})}
			</Stack>
		</div>
	);
}
