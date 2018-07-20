import { FETCH_RECIPE } from '../actions/types'; 


const INITIAL_STATE = {
	results: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_RECIPE:
			return {...state, results: action.payload.data };
	default:
		return state;
	}
}