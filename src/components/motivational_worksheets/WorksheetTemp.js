import React from 'react'
import { Link } from "react-router-dom";
import Status from "./Status";


function Worksheet({title,link, status, index}) {

	const url = `/worksheet/${index+1}/?title=${title}`
	
  return (
			<div className="bg-white hover:bg-zinc-100 p-6 flex flex-col items-start sm:flex-row sm:justify-between sm:items-center">
				<div className="flex flex-col items-start">
					<p className="text-lg md:text-lg font-bold">{title}</p>
					<div className="flex flex-wrap justify-center items-center mt-2">
						<p className="text-slate-400 text-sm mr-2">Worksheet {index + 1}</p>
						<Status status={status} />
					</div>
				</div>
				<div className="mt-4 md:mt-0">
					<Link to={url}>
						<button className="md:mr-2 mt-2 md:mt-0 button">
							Complete Worksheet
						</button>
					</Link>
				</div>
			</div>
		);
}

export default Worksheet