import API_KEY from '../../api_keys/weather_key';
import axios from 'axios';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city}, IN`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
