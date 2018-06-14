import FETCH_WEATHER from '../actions/index';

//appends each city weather data to state
export default function(state = null, action) {
	switch(actio.type) {
	case FETCH_WEATHER:
		//appending city weather data to state
		return [ action.payload.data, ...state ]; //state.concat([action.payload.data])
	}
	return state;
}
