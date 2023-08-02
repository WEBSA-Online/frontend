import React from "react";
import { Stack } from "@mui/material";
import ShowError from "./motivational_worksheets/worksheets/components/utils/ErrorMsg";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ResetPassword() {
	const [error, setError] = React.useState({ status: false, msg: "" });
	const [success, setSuccess] = React.useState(false);
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const { resetcode } = useParams();

	class ValidationError extends Error {
		constructor(message) {
			super(message);
			this.name = "ValidationError";
		}
	}

	const handleSubmit = async () => {
		setLoading(true);
		try {
			if (password !== confirmPassword)
				throw new ValidationError("Passwords not matching");
			if (password === "" || confirmPassword === "")
				throw new ValidationError("Cannot submit an empty string");
			await axios.post(
				`${process.env.REACT_APP_API_PROD}/resetpassword/verifylink`,
				{
					resetcode: resetcode,
					newpassword: password,
				}
			);
			setLoading(false);
			setSuccess(true);
		} catch (err) {
			console.log(err);
			setLoading(false);
			if (err instanceof ValidationError) {
				setError({ ...error, status: true, msg: err.message });
			} else {
				setError({ ...error, status: true, msg: err.response.data.error });
			}
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
				<div>
					<p className="my-3">We've successively changed your password.</p>
					<Link to="/">
						<span className="text-websa-green font-bold">Back to home</span>
					</Link>
				</div>
			) : (
				<>
					{" "}
					<input
						className={`appearance-none  ${
							error === true ? `border-2 border-red-600` : `border border-gray-500`
						} rounded w-3/4 py-4 px-3 font-websa-regular text-black text-sm focus:outline-none focus:border-2 focus:border-emerald-500`}
						placeholder="Enter new password"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						className={`appearance-none  ${
							error === true ? `border-2 border-red-600` : `border border-gray-500`
						} rounded w-3/4 py-4 px-3 font-websa-regular text-black text-sm focus:outline-none focus:border-2 focus:border-emerald-500`}
						placeholder="Confirm new password"
						type="password"
						onChange={(e) => setConfirmPassword(e.target.value)}
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
