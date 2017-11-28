import {
  GET_ALL_REPAYMENTS,
  GET_INCOMING_REPAYMENTS,
	GET_OUTGOING_REPAYMENTS,
  START_FETCH_REPAYMENTS,
} from './../actions/types';


const INITIAL_STATE = {
	loading: true,
	repayments: []
}


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case START_FETCH_REPAYMENTS:
			return {...state, loading: true };

		case GET_ALL_REPAYMENTS:
			return { ...state, loading: false, repayments:action.payload};

		default:
			return state;
	}
}
