import {
	HANDLE_LOGIN_FORM,
	LOGIN_USER,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILED,
	USER_DETAIL_SUCCESS,
	USER_DETAIL_FAILED
} from './types';
import { API_URL, xRay } from 'react-native-dotenv';
import { Alert } from 'react-native';
import axios from 'axios';
import { NavigationActions } from 'react-navigation'



export function handleLoginForm({prop, value}){
	return{
		type: HANDLE_LOGIN_FORM,
		payload: {prop, value}
	};
}


export function validateLoginCredential(user){
	axios.defaults.headers.common['xRay'] = xRay;
	return(dispatch) => {
		//for sake of showing spinner;
		dispatch({type: LOGIN_USER});

		axios.post(API_URL + '/login/sign-in', user).then(user => {
			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: user
			});
			//dispatch(NavigationActions.navigate({ routeName: 'Dashboard' }));
		})
		.catch(err => {
			dispatch({
				type: USER_LOGIN_FAILED,
				payload: err.response
			});
		});
	}
}