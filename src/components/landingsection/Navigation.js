import React from 'react'
import Logo from "../../images/websa-logo-updated.png";
import Menu from './Menu';
import MobileMenu from "./MobileMenu";


const Navigation = ({menu}) => {
  return (
			<div className="sticky top-0 bg-white">
				<div className="py-3 px-5 md:container md:mx-auto sm:px-0 flex justify-between items-center">
					<img src={Logo} alt="Websa logo" className="max-w-[40%] md:max-w-[57%]" />
					<Menu menu={menu} />
					<span className="md:hidden">
						<MobileMenu menu={menu} />
					</span>
				</div>
			</div>
		);
}

export default Navigation
