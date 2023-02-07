import * as React from "react";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export default function IconsRadio({ details, grid, setConsent, setSelected }) {
	const handleClick = (e) => {
		setConsent(e.target.value);
		setSelected(true);
	};

	return (
		<RadioGroup
			aria-label="platform"
			overlay
			// defaultValue
			name="platform"
			sx={{
				flexDirection: details.direction,
				gap: 2,
				[`& .${radioClasses.checked}`]: {
					[`& .${radioClasses.action}`]: {
						inset: -1,
						border: "3px solid",
						borderColor: "green",
					},
					color: "green",
				},
			}}
		>
			{details.options.map((value, index) => (
				<Sheet
					key={index}
					variant="contained"
					sx={{
						borderRadius: "md",
						bgcolor: "white",
						boxShadow: "sm",
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: 1.5,
						p: 1,
						width: { xs: "100%", md: "50%" },
					}}
				>
					<Radio
						value={value.name}
						name="platform"
						checkedIcon={<CheckCircleRoundedIcon />}
						onClick={(e) => handleClick(e)}
					/>
					<span style={{ fontSize: "18px" }}>{value.name}</span>
				</Sheet>
			))}
		</RadioGroup>
	);
}
