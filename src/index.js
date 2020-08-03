import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

// Class Component
class App extends React.Component {
	// Setting state to be empty upon loading
	state = {
		lat: null,
		error: null,
	};

	componentDidMount() {
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
			return <SeasonDisplay lat={this.state.lat} />;
		} else {
			return <Loader message='Please allow location request' />;
		}
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
