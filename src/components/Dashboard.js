import React from "react";
import { Outlet } from "react-router-dom";

export default function Home() {
	return (
      <>
         <h2>Top bar</h2>
         <Outlet />
      </>
	);
}
