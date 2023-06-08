import React from "react";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const counsellors = [
	{ name: "Okidi Richard Owor", number: "0784062395", whatsapp: "256784062395" },
	{ name: "Namubiru Sylvia", number: "0758007106", whatsapp: "256758007106" },
	{ name: "Kagere Nusurah", number: "0702224064", whatsapp: "256702224064" },
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
						<Grid container>
							<Grid xs={12} sm={6} className="mb-1 sm:mb-0">
								<p className="text-lg font-websa-bold">{value.name}</p>
								<p className="text-base">{value.number}</p>
							</Grid>
							<Grid xs={12} sm={6} className="sm:flex sm:justify-end">
								<a
									href={`https://wa.me/${value.whatsapp}`}
									target="_blank"
									rel="noreferrer"
								>
									<button className="button-small w-full">Chat on whatsapp</button>
								</a>
							</Grid>
						</Grid>
					);
				})}
			</Stack>
		</div>
	);
}
