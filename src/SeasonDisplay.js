import React from "react";
import "./SeasonDisplay.css";

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const seasonText =
		season === "summer" ? "Let's hit the beach" : "Burrr it's chilly";
	const iconName = season === "summer" ? "sun" : "snowflake";

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{seasonText}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

export default SeasonDisplay;
