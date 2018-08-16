import { FETCH_RECIPE } from '../actions/types';

const INITIAL_STATE = {
	recipeSearchTerm: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_RECIPE:
			return { ...state, recipeSearchTerm: action.payload }		
		default:
			return state;
	}
}