import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/LayoutOne";
import Register from "./components/Register"
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
	// setInterval(() => localStorage.clear(), 1800000);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/screening" element={<Layout />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);	
}

export default App;
