import * as React from "react";
import Avatar from "@mui/material/Avatar";

function stringAvatar(name) {
	return {
		sx: {
			bgcolor: "#f7f7f7",
			fontSize: "15px",
		},
		children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
	};
}

export default function Avatars({ username }) {
	// return <Avatar {...stringAvatar(username)} />;
   return <Avatar src="/broken-image.jpg" />;
}
