import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import WorksheetOne from "../motivational_worksheets/worksheets/One";

export default function Worksheet() {
	const [searchParams] = useSearchParams();
	const title = searchParams.get("title");
	const { pageid } = useParams();
	console.log(pageid);
	return (
		<>
			<Link to="/motivational-interviewing">
				<div class="flex items-center">
					<FontAwesomeIcon icon={faArrowLeft} className="text-green-400" />
					<p className="text-white text-sm sm:text-base ml-2">Back</p>
				</div>
			</Link>
			<div className="mt-4 divide-y">
				<div className="bg-slate-200 p-5 rounded-t-lg flex flex-wrap items-center justify-center sm:justify-between">
					<p className="font-websa-bold text-lg sm:text-xl">{title}</p>
				</div>
			</div>
			<div className="py-5 bg-white">
				{pageid === "1" ? <WorksheetOne /> : null}
			</div>
		</>
	);
}
