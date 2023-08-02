import React from "react";
import { Stack } from "@mui/material";
import ShowError from "./motivational_worksheets/worksheets/components/utils/ErrorMsg";
import axios from "axios";

function ResetPassword() {
	const [error, setError] = React.useState({status: false, msg: "" });
   const [success, setSuccess] = React.useState(false);
	const [input, setInputText] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const handleSubmit = async () => {
		setLoading(true);
		try {
			await axios.post(`${process.env.REACT_APP_API_PROD}/resetpassword`, {
				email: input,
			});
			setLoading(false);
         setSuccess(true);
		} catch (err) {
			setLoading(false);
			setError({ ...error, status: true, msg: err.response.data.error });
			setTimeout(() => {
				handleCloseError();
			}, 4000);
		}
	};

	const handleCloseError = () => setError({ ...error, status: false, msg: "" });
   

	return (
		<Stack
			className="sm:w-1/2 w-[90%] mx-auto p-2 sm:p-7 text-center flex flex-col items-center"
			spacing={2}
		>
			<h3 className="text-3xl">Password Reset</h3>
			{error.status ? (
				<ShowError
					textclass="text-white"
					iconclass="text-base cursor-pointer text-white"
					divclass="rounded mb-3 flex justify-between w-full items-center py-1 px-4 bg-red-600"
					ErrMsg={error.msg}
					method={handleCloseError}
				/>
			) : null}

			{success ? (
				<p className="my-3">
					We've sent you an <span className="font-websa-bold">email</span> Just
					follow the instructions to reset your password..
				</p>
			) : (
				<>
					{" "}
					<p className="my-3">
						Enter the <span className="font-websa-bold">email address</span> that you
						used to register. We'll send you an email a link to reset your password.
					</p>
					<input
						className={`appearance-none  ${
							error === true ? `border-2 border-red-600` : `border border-gray-500`
						} rounded w-3/4 py-4 px-3 font-websa-regular text-black text-sm focus:outline-none focus:border-2 focus:border-emerald-500`}
						placeholder="Enter email address"
						type="text"
						onChange={(e) => setInputText(e.target.value)}
					/>
					<button
						onClick={handleSubmit}
						className="bg-websa-red text-white font-websa-bold py-2 px-10 rounded"
					>
						{loading ? "PROCESSING..." : "SEND"}
					</button>
				</>
			)}
		</Stack>
	);
}

export default ResetPassword;
