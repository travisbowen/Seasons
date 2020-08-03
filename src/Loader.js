import React from "react";

const Loader = (props) => {
	return (
		<div class='ui active dimmer'>
			<div class='ui text loader'>{props.message}</div>ds
		</div>
	);
};

export default Loader;
