import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer() {
	const time = (remainingTime) => {
		if (remainingTime === 0) {
			window.location.reload();
		}

		return (
			<div className="timer">
				<div className="value">{remainingTime}</div>
			</div>
		);
	};

	return (
		<div className="App">
			<p className="title" style={{ marginBottom: "25px" }}>
				Thank you for completing <strong>Section One.</strong> Now proceeding to <br />{" "}
				<strong>The Alcohol Use Disorders Identification Test</strong>
			</p>
			<div className="timer-wrapper">
				<CountdownCircleTimer
					isPlaying
					duration={5}
					colors={["#045100", "#00a551", "#1cef38", "#ffe23f", "#e40d19", "#a4050b"]}
					colorsTime={[5, 4, 3, 2, 1, 0]}
				>
					{({ remainingTime }) => time(remainingTime)}
				</CountdownCircleTimer>
			</div>
		</div>
	);
}
