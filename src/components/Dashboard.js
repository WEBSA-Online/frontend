import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Outlet, Link } from "react-router-dom";
import MobileMenu from "./utils/MobileMenu"
import UserAccount from "./utils/UserAccount";
import { useSelector } from "react-redux";
import Logo from "../images/websa-logo-updated.png"

export const pages = [
	{ name: "Home", link: "/" },
	{ name: "Motivational Interviewing", link: "/motivational-interviewing" },
	{ name: "Profile", link: "/profile" },
	{ name: "Practical Advice", link: "/practical-advice" },
	{ name: "Resources", link: "/resources" },
	{ name: "Talk to a counsellor", link: "/contacts" },
];

export default function PersistentDrawerLeft() {
	const userDetails = useSelector((state) => state.auth.userDetails);

	return (
		<Box>
			<CssBaseline />
			<Toolbar
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
				className="py-3"
			>
				{userDetails.selection === "control" ? null : (
					<span className="block md:hidden">
						<MobileMenu menu={pages} />
					</span>
				)}
				<img src={Logo} alt="Websa logo" className="max-w-[40%] md:max-w-[57%]" />
				{userDetails.selection === "control" ? null : (
					<ul className="hidden md:block">
						{pages.map((value) => {
							return (
								<li className="md:inline-block mb-4 md:mr-6 md:mb-0">
									{" "}
									<Link to={value.link}>
										<span className="text-black hover:text-websa-green hover:underline">
											{value.name}
										</span>
									</Link>
								</li>
							);
						})}
					</ul>
				)}
				<span>
					<UserAccount />
				</span>
			</Toolbar>

			<div
				className={`min-h-screen bg-websa-green w-full flex flex-col items-center py-[7%] md:py-[2%]`}
			>
				<div className="w-[90%] md:w-[80%]">
					<Outlet />
				</div>
			</div>
		</Box>
	);
}
