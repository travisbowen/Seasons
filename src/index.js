import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from "./SeasonDisplay";

// Class Component
class App extends React.Component {
	// Needs constructor method when declaring state within class component
	constructor(props) {
		super(props);

		// Setting state to be empty upon loading
		this.state = {
			lat: null,
			error: null,
		};

		// Retrieve user location to depend on season
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					lat: position.coords.latitude,
				});
			},
			(error) => this.setState({ error: error.message }),
		);
	}

	render() {
		if (this.state.error && !this.state.lat) {
			return <div>Error: {this.state.error}</div>;
		} else if (this.state.lat && !this.state.error) {
			return <div>Latitude: {this.state.lat}</div>;
		} else {
			return <div>Loading...</div>;
		}
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
