import { combineReducers } from 'redux';
import authReducer from './authReducer';
import DashReducer from './DashReducer';
import SearchReducer from './searchReducer';
import otpReducer from './otpReducer';
import PaginationReducer from './paginationReducer'

//import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  dashboard:DashReducer,
  SearchReducer : SearchReducer,
  otpReducer : otpReducer,
  PaginationReducer : PaginationReducer
 // errors: errorReducer
});
