import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({ //our STATE of the application
  books: BooksReducer
});

export default rootReducer;
