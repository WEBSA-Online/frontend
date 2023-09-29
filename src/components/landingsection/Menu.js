import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ menu }) => {
   const location = useLocation()
	return (
		<>
			<ul className="md:flex items-center hidden">
				{menu.map((value) => {
					return (
						<li>
							<Link
								className={`mr-10 font-websa-bold text-lg hover:text-green-700  ${
									location.pathname === value.link ? `text-green-700` : null
								}`}
								href={value.link}
								to={value.link}
							>
								{value.name}
							</Link>
						</li>
					);
				})}
				<li>
					<Link to="/login">
						<button className="font-websa-bold transition-all bg-websa-red hover:bg-websa-green py-2 px-2.5 rounded shadow-sm w-[100px] text-white font-bold text-sm">
							LOGIN
						</button>
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Menu;
