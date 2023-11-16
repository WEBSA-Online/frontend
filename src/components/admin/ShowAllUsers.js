import axios from "axios";
import React from "react";
import { API_URL } from "../../API";
import AllUsersTable from "./AllUsersTable";
import { FaSpinner } from "react-icons/fa6";

function ShowAllUsers() {
	const [data, setData] = React.useState([]);
	const [count, setCount] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [params, setParams] = React.useState(null);

	async function fetchdata() {
		try {
			const response = await axios.get(`${API_URL}/allusers?${params}`);
			setData(response.data.data);
			setCount(response.data.count);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
			alert(`${error.message}`);
		}
	}

	React.useEffect(() => {
		fetchdata();
	}, [data]);

	console.log(data);

	return (
		<div className="flex justify-center">
			{loading === true ? (
				<FaSpinner className="animate-spin text-5xl text-center text-websa-red" />
			) : (
				<AllUsersTable userData={data} />
			)}
		</div>
	);
}

export default ShowAllUsers;
