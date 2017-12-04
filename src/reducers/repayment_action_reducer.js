import {
  START_UPDATE_REPAYMENT,
	COMPLETE_UPDATE_REPAYMENT
} from './../actions/types';

import _ from 'lodash';

const INITIAL_STATE = {
	loading: true,
	response: null,
}


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case START_UPDATE_REPAYMENT:
			return {...state, loading: true };

		case COMPLETE_UPDATE_REPAYMENT:
			return { ...state, loading: false, repayments:action.payload};

		default:
			return state;
	}
}
