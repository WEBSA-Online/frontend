import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


export default function Timer() {

	const time = (remainingTime) => {
		if (remainingTime === 0){
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
			<p className="info">
				Now that you have accepted, Fill the form answering some key questions. It
				takes only <strong>20 minutes.</strong> Please note that you will be
				refunded with an internet bundle worth <strong>2GBs.</strong>
			</p>
			<div className="timer-wrapper">
				<CountdownCircleTimer
					isPlaying
					duration={15}
					colors={["#00a551", "#1cef38", "#ffe23f", "#e40d19", "#a4050b"]}
					colorsTime={[15, 7, 5, 2, 0]}
				>
					{({ remainingTime }) => time(remainingTime)}
				</CountdownCircleTimer>
			</div>
		</div>
	);
}
