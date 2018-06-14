import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const { lat, lon } = cityData.city.coord;
		return (
			<tr key = { name }>
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td>
					<Chart data={temps} color="orange" unit="K" />
				</td>
				<td>
					<Chart data={pressure} color="black" unit="hPa" />
				</td>
				<td>
					<Chart data={humidity} color="blue" unit="%" />
				</td>
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
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
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
