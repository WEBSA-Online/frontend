import { createTheme } from "@mui/material/styles";


export const websaTheme = createTheme({
	palette: {
		primary: {
			main: "#272a68",
		},
		secondary: {
			main: "#0dccf2",
		},
	},
	typography: {
		fontFamily: "Poppins-Regular",
		fontSize: 16,
		button: {
			fontFamily: "Poppins-Bold",
			fontSize: 16,
			boxShadow: "none",
			textTransform: "none",
		},
	},
	MuiListItemIcon: {
		styleOverrides: {
			root: {
				color: "red !important",
			},
		},
	},
});