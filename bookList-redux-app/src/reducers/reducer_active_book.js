//in the initial state, return null which means no book selected
const initialState = null;

//for action type BOOK_SELECTED returns selected book value to GLOBAL state 
export default function(state = initialState, action) {
	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
		default:
			return state;
	}
}
