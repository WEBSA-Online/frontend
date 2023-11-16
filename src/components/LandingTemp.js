import React from 'react'
import { Outlet } from 'react-router-dom';
import Navigation from './landingsection/Navigation';
import Footer from './landingsection/Footer';

export const menu = [
	{ name: "Home", link: "/" },
	{ name: "FAQs", link: "/faqs" },
	{ name: "Importance Of Study", link: "/importance" },
	{ name: "Contact Us", link: "/contact-us" },
];


const LandingTemp = () => {
  return (
			<div className='relative'>
				<Navigation menu={menu} />
				<Outlet />
				<Footer />
			</div>
		);
}

export default LandingTemp
