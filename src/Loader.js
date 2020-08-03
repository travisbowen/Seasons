import React from "react";

const Loader = (props) => {
	return (
		<div class='ui active dimmer'>
			<div class='ui text loader'>{props.message}</div>ds
		</div>
	);
};

// Allow default props if none is passed into component
Loader.defaultProps = {
	message: "Loading...",
};

export default Loader;
