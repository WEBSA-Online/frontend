import React from 'react'

export default function Status({status}) {
  return (
			<div>
				{!status ? (
					<button className="cursor-default text-xs text-amber-800 rounded-full pt-0.5 px-2 bg-amber-100 border border-amber-500">
						Pending
					</button>
				) : (
					<button className="cursor-default text-xs text-green-800 rounded-full pt-0.5 px-2 bg-green-100 border border-green-500">
						Completed
					</button>
				)}
			</div>
		);
}
