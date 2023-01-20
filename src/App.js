// import logo from "./mak-logo.png";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/LayoutOne";
import Register from "./components/Register"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/screening" element={<Layout />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);

		
}

export default App;
