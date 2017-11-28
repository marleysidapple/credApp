import {
	GET_ALL_REPAYMENTS,
  GET_INCOMING_REPAYMENTS,
	GET_OUTGOING_REPAYMENTS,
  START_FETCH_REPAYMENTS,
} from './types';

import { API_URL, xRay } from 'react-native-dotenv';
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import axios from 'axios';
import { NavigationActions } from 'react-navigation';



export function fetchAllRepayments(loginToken, client_guid){
	return(dispatch) => {
		axios.defaults.headers.common['xRay'] = xRay;
		axios.defaults.headers.common['token'] = loginToken;

		dispatch({ type: START_FETCH_REPAYMENTS });
		axios.post(API_URL + '/current-loans/get-mobile-repayments', {client_guid}).then(repayments => {
			console.log(repayments);
			dispatch({
				type: GET_ALL_REPAYMENTS,
				payload: repayments
			});
		}).catch(err => {
			// some err
			console.log(err);
		});
	}
}
