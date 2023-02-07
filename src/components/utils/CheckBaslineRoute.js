import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
	let baseline = { isBaselineDone: false };

	return baseline.isBaselineDone ? <Outlet /> : <Navigate to="/baseline" />;
};

export default PrivateRoutes;
