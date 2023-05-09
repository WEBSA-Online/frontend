import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_URL } from "../../../../API";

export function useWorksheets() {
	const [data, setData] = React.useState([]);
	const [error, setError] = React.useState({status: false, msg: "" });
	const [loading, setLoading] = React.useState(true);
	const userDetails = useSelector((state) => state.auth.userDetails);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${API_URL}/users/${userDetails.email}`);
				setData(response.data);
				setLoading(false);
			} catch (err) {
				setLoading(false);
				setError({ status: true, msg: `${err.message}` });
			}
		};
		fetchData();
	}, [data, loading, userDetails, error]);

   return {data, loading, error}
}

export function useSubmit() {
	const [success, setSuccess] = React.useState(false);
	const [error, setError] = React.useState({ status: false, msg: "" });
	const [loading, setLoading] = React.useState(false);
	const userDetails = useSelector((state) => state.auth.userDetails);
	
	const submitData = async (newData) => {
		setLoading(true);
		try {
			await axios.put(`${API_URL}/users/${userDetails.email}`, newData);
			setSuccess(true)
			setLoading(false);
		} catch (err) {
			setLoading(false);
			setError({ status: true, msg: `${err.message}`});
			console.log(err);
		}
	};

	const closeAPIerror = () => {
		setError({ ...error, status: false });
	};

	const closeSuccessMsg = () => {
		setSuccess(false);
	};


	React.useEffect(() => {}, [loading, success, error]);


	return { submitData, loading, error, success, closeAPIerror, closeSuccessMsg };
}

