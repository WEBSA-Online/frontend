import React from 'react'

function InpurForm({ placeholder, text }) {
	return (
		<input
			className="appearance-none border border-gray-300 rounded w-full py-1.5 px-3 font-websa-regular text-black text-sm focus:outline-none focus:border-2 focus:border-emerald-500"
			placeholder={placeholder}
			type={text}
		/>
	);
}

export default InpurForm
