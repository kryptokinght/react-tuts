import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({ //our STATE of the application
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
