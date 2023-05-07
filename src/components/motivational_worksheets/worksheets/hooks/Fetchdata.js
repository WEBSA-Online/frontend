import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_URL } from "../../../../API";

function useWorksheets() {
	const [data, setData] = React.useState([]);
	const [error, setError] = React.useState({ error: false, errMsg: "" });
	const [loading, setLoading] = React.useState(true);
	const userDetails = useSelector((state) => state.auth.userDetails);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${API_URL}/users/${userDetails.email}`);
				setData(response.data);
				setLoading(!loading);
			} catch (err) {
				setError({ error: true, errMsg: `${err.msg}` });
            console.log(err)
			}
		};
		fetchData();
	}, [data, loading, userDetails, error]);

   return {data, loading, error}
}

export default useWorksheets;
