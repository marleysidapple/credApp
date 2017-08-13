import {
	HANDLE_LOGIN_FORM,
	LOGIN_USER,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILED,
	USER_DETAIL_SUCCESS,
	USER_DETAIL_FAILED
} from './types';
import { API_URL } from 'react-native-dotenv';
import { Alert } from 'react-native';
import axios from 'axios';
import { NavigationActions } from 'react-navigation'



export function handleLoginForm({prop, value}){
	return{
		type: HANDLE_LOGIN_FORM,
		payload: {prop, value}
	};
}
