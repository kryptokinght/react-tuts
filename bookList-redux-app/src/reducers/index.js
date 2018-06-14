import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//all the parts of the state returned by the reducers
//gets combined here
const rootReducer = combineReducers({ //GLOBAL STATE of the application
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
