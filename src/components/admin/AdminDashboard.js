import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../landingsection/Navigation";

export const menu = [
	{ name: "All Users", link: "/allusers" },
	{ name: "Intervention", link: "/selected" },
];


function AdminDashboard() {
	return (
		<>
			<Navigation menu={menu} />
			<div className="bg-slate-100 min-h-screen">
				<div className="container mx-auto pt-4 px-5">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default AdminDashboard;
