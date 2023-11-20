import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import Layout from "./components/LayoutOne";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/pages/Home";
import Dashboard from "./components/Dashboard";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import Consent from "./components/Consent";
import Baseline from "./components/Baseline";
import CheckBaseline from "./components/utils/CheckBaslineRoute";
import Practical from "./components/pages/PracticalAdvice";
import MInterviewing from "./components/pages/MInterviewing";
import Personal from "./components/pages/Personal";
import Resources from "./components/pages/Resources";
import Worksheet from "./components/pages/Worksheet";
import Counsellors from "./components/pages/Counsellors";
import { useDispatch } from "react-redux";
import { resetResponses, resetStep } from "./redux/slices/stepSlice";
import React from "react";
import ResetPassword from "./components/ResetPassword";
import ResetPasswordTemp from "./components/ResetPasswordTemp";
import SetNewPassword from "./components/SetNewPassword";
import LandingTemp from "./components/LandingTemp";
import Landing from "./components/pages/Landing";
import FAQs from "./components/pages/Faqs";
import ContactUs from "./components/pages/Contactus";
import Importance from "./components/pages/Importance";
import AdminDashboard from "./components/admin/AdminDashboard";
import ShowAllUsers from "./components/admin/ShowAllUsers";
import ShowAllSelected from "./components/admin/ShowAllSelected";

function App() {
	const [isPageLoaded, setIsPageLoaded] = React.useState(false);
	const dispatch = useDispatch();

	React.useEffect(() => {
		setIsPageLoaded(true);
	}, []);

	const previousPageUrl = document.referrer;

	if (isPageLoaded && previousPageUrl === "https://websaonline.com") {
		dispatch(resetResponses());
		dispatch(resetStep(0));
	}

	setInterval(() => localStorage.clear(), 900000);
	return (
		<Router>
			<Routes>
				<Route element={<LandingTemp />}>
					<Route path="/" element={<Landing />} />
					<Route path="/faqs" element={<FAQs />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/importance" element={<Importance />} />
				</Route>
				<Route element={<PrivateRoutes />}>
					<Route element={<AdminDashboard />}>
						<Route path="/allusers" element={<ShowAllUsers />} />
						<Route path="/selected" element={<ShowAllSelected />} />
					</Route>
					<Route path="/baseline" element={<Baseline />} />
					<Route element={<CheckBaseline />}>
						<Route element={<Dashboard />}>
							<Route path="/dashboard" element={<Home />} exact />
							<Route
								path="/dashboard/practical-advice"
								element={<Practical />}
								exact
							/>
							<Route path="/dashboard/resources" element={<Resources />} exact />
							<Route path="/dashboard/contacts" element={<Counsellors />} exact />
							<Route path="/dashboard/profile" element={<Personal />} exact />
							<Route
								path="/dashboard/motivational-interviewing"
								element={<MInterviewing />}
							/>
							<Route
								path="/dashboard/worksheet/:pageid"
								element={<Worksheet />}
							/>
						</Route>
					</Route>
				</Route>
				<Route path="/screening" element={<Layout />} />
				<Route path="/baseline" element={<Layout />} />
				<Route path="/consent" element={<Consent />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<Login />} />
				<Route element={<ResetPasswordTemp />}>
					<Route path="/lost-password" element={<ResetPassword />} />
					<Route path="/reset-password/:resetcode" element={<SetNewPassword />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
