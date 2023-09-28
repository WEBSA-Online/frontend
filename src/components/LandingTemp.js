import React from 'react'
import { Outlet } from 'react-router-dom';
import Navigation from './landingsection/Navigation';
import Footer from './landingsection/Footer';

const LandingTemp = () => {
  return (
			<div className='relative'>
				<Navigation />
				<Outlet />
				<Footer />
			</div>
		);
}

export default LandingTemp
