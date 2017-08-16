import { combineReducers } from 'redux';
import auth_login_reducer from './auth_login_reducer';
import loan_reducer from './loan_reducer';
import AppNavigatorReducer from './AppNavigatorReducer';

export default combineReducers({
	auth_login: auth_login_reducer,
	user_loan: loan_reducer,
	nav: AppNavigatorReducer,
});