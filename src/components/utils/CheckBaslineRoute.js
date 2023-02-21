import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_URL } from "../../API";
import axios from "axios";
import React from "react";

const PrivateRoutes = () => {
	const userDetails = useSelector((state) => state.auth.userDetails);
	const [baselineStatus, setBaselineStatus] = React.useState("");
	const [isLoading, setLoading] = React.useState(true)
	
	React.useEffect(() => {
		const getBaselineStatus = async () => {
			try {
				const response = await axios.get(`${API_URL}/users/${userDetails.email}`);
				setBaselineStatus(response.data.isBaselineComplete);
				setLoading(false)
			} catch (err) {
				setLoading(false);
				console.log(err);
			}
		};
		getBaselineStatus();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!isLoading) return baselineStatus ? <Outlet /> : <Navigate to="/baseline" />;
};

export default PrivateRoutes;
