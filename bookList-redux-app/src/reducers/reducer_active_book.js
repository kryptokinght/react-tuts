//in the initial state, return the first book
const initialState = null;

export default function(state = initialState, action) {
	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
		default:
			return state;
	}
}
