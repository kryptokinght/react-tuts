import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';


const rootReducer = combineReducers({
  weatherData: WeatherReducer
});

export default rootReducer;
