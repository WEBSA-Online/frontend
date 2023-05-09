import React from 'react'

function InpurForm({ placeholder, text, setInputText, error}) {
	return (
		<input
			className={`appearance-none  ${
				error === true ? `border-2 border-red-600` : `border border-gray-300`
			} rounded w-full py-2 px-3 font-websa-regular text-black text-sm focus:outline-none focus:border-2 focus:border-emerald-500`}
			placeholder={placeholder}
			type={text}
			onChange={(e) => setInputText(e.target.value)}
		/>
	);
}

export default InpurForm
