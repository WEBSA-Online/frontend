import React, { useEffect, useState } from "react";

const CircularProgress = ({
	size,
	strokeWidth,
	percentage,
	color,
	fontSize,
	dy,
	x,
	y,
	total
}) => {
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		setProgress(percentage);
	}, [percentage]);

	const viewBox = `0 0 ${size} ${size}`;
	const radius = (size - strokeWidth) / 2;
	const circumference = radius * Math.PI * 2;
	const dash = (progress * circumference) / total;

	return (
		<svg width={size} height={size} viewBox={viewBox}>
			<circle
				fill="none"
				stroke="#ccc"
				cx={size / 2}
				cy={size / 2}
				r={radius}
				strokeWidth={`${strokeWidth}px`}
			/>
			<circle
				fill="none"
				stroke={color}
				cx={size / 2}
				cy={size / 2}
				r={radius}
				strokeWidth={`${strokeWidth}px`}
				transform={`rotate(-90 ${size / 2} ${size / 2})`}
				strokeDasharray={[dash, circumference - dash]}
				strokeLinecap="round"
				style={{ transition: "all 0.4s" }}
			/>
			<text
				fill="black"
				fontSize={fontSize}
				x={x}
				y={y}
				dy={dy}
				textAnchor="middle"
			>
				{percentage === 0 ? `${percentage}/${total}` : percentage === 1 ? `${percentage}/${total}` : percentage === 2 ? `${percentage}/${total}` : percentage === 3 ? `${percentage}/${total}` : percentage === 4 ? `${percentage}/${total}` : percentage === 5 ? `${percentage}/${total}` : `${total}/${total}`}
			</text>
		</svg>
	);
};

export default CircularProgress;
