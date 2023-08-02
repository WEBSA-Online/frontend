import React from 'react'
import Logo from "../images/websa-logo-updated.png";
import { Outlet } from 'react-router-dom';

function ResetPasswordTemp() {
  return (
			<div>
				<header className="py-3 divide-y divide-dashed border">
					<img
						src={Logo}
						alt="Websa logo"
						className="max-w-[60%] md:max-w-[57%] mx-auto"
					/>
				</header>
				<section className="py-3">
					<Outlet />
				</section>
			</div>
		);
}

export default ResetPasswordTemp