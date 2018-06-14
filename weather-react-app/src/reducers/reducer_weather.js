import { FETCH_WEATHER } from '../actions/index';

//appends each city weather data to state
export default function(state = [], action) {
	switch(action.type) {
	case FETCH_WEATHER:
		//appending city weather data to state
		return state.concat([action.payload.data]); //state.concat([action.payload.data])
	}
	return state;
}
