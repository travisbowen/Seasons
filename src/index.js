import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// const App = () => {
// 	window.navigator.geolocation.getCurrentPosition(
// 		(position) => console.log(position),
// 		(error) => console.log(error),
// 	);
// 	return <div>Hi there!</div>;
// };

class App extends React.Component {
	render() {
		return <div>This is the class component</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
