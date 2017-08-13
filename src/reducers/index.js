import { combineReducers } from 'redux';
//import auth_reducer from './auth_reducer';
import auth_login_reducer from './auth_login_reducer';
//import auth_detail_reducer from './auth_detail_reducer';
import { NavigationActions } from 'react-navigation';
//import { Router } from './../../src/Router';
import AppNavigatorReducer from './AppNavigatorReducer';


export default combineReducers({
	//auth_register: auth_reducer,
	auth_login: auth_login_reducer,
	//auth_detail: auth_detail_reducer,
	nav: AppNavigatorReducer,
});