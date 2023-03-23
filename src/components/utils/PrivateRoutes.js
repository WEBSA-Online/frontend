import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { updateToken } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const PrivateRoutes = () => {
	const token = useSelector((state) => state.auth.accessToken);
	const timeOfLogin = useSelector((state) => state.auth.timeOfLogin);
	const dispatch = useDispatch();
	let decoded;
	let isTokenValid;

	if (token !== "") {
		decoded = jwt_decode(token);
		console.log(token);
		console.log(Date.now() < decoded.exp);
		console.log("current dat", Date.now());
		console.log("time of login",timeOfLogin);
		console.log("time of expiry", decoded.exp);
		isTokenValid = decoded.exp < Date.now();
	}

	if (!isTokenValid) {
		dispatch(updateToken(""));
	}

	return isTokenValid || token !== "" ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
