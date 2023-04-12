import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/LayoutOne";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/pages/Home";
import Dashboard from "./components/Dashboard";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import Consent from "./components/Consent"
import Baseline from "./components/Baseline"
import CheckBaseline from "./components/utils/CheckBaslineRoute"
import Practical from "./components/pages/PracticalAdvice"
import MInterviewing from "./components/pages/MInterviewing";
import Personal from "./components/pages/Personal";
import Resources from "./components/pages/Resources";


function App() {
	setInterval(() => localStorage.clear(), 900000);
	const previousPageUrl = document.referrer;
	if (previousPageUrl === "https://websaonline.com/"){
		localStorage.clear();
	}
		return (
			<Router>
				<Routes>
					<Route element={<PrivateRoutes />}>
						<Route path="/baseline" element={<Baseline />} />
						<Route element={<CheckBaseline />}>
							<Route element={<Dashboard />}>
								<Route path="/" element={<Home />} exact />
								<Route path="/practical-advice" element={<Practical />} exact />
								<Route path="/resources" element={<Resources />} exact />
								<Route path="/profile" element={<Personal />} exact />
								<Route
									path="/motivational-interviewing"
									element={<MInterviewing />}
									exact
								/>
							</Route>
						</Route>
					</Route>
					<Route path="/screening" element={<Layout />} />
					<Route path="/baseline" element={<Layout />} />
					<Route path="/consent" element={<Consent />} />
					<Route path="/register" element={<Register />} />

					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		);
}

export default App;
