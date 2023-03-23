import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<h2>You are most welcome</h2>
				<h3>Thank you for completing the 1st phase.</h3>
				<h4 style={{fontFamily:"Poppins-Regular"}}>
					We've got you covered! You can access more resources{" "}
						<Link style={{ color: "red" }} to="/resources">
							here
						</Link>
				</h4>
			</div>
		);
}
