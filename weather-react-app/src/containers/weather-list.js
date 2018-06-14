import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name;
		return (
			<tr key = { name }>
				<td>{ name }</td>
			</tr>
		);
	}

	render() {
		if(!this.props.weather)
			return <h3>Enter a city to view its weather</h3>
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state) {
	return { weather: state.weatherData };
}

export default connect(mapStateToProps)(WeatherList);
