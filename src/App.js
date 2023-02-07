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
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import Consent from "./components/Consent"

function App() {
	setInterval(() => localStorage.clear(), 900000);
	return (
		<Router>
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route element={<Dashboard />}>
						<Route path="/" element={<Home />} exact />
					</Route>
				</Route>
				<Route path="/screening" element={<Layout />} />
				<Route path="/consent" element={<Consent />} />
				<Route path="/register" element={<Register />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
