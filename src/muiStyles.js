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
		fontFamily: "PublicSans-Regular",
		fontSize:16,
		button: {
			fontFamily: "Comfortaa-Bold",
			fontSize: 16,
			boxShadow: "none",
			textTransform:"none"
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