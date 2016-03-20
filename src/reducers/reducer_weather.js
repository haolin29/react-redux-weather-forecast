import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
		// don't manipulate state, we just create a new array with the old data
			return [action.payload.data, ...state]; //[city, city, city] NOT [city, [city, city]]
	}

	return state;
}