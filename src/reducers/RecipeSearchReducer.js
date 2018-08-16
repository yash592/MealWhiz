import { FETCH_RECIPE, SEARCHTERM_CHANGE } from '../actions/types';

const INITIAL_STATE = {
	recipeSearchTerm: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SEARCHTERM_CHANGE:
			return { ...state, recipeSearchTerm: action.payload }		
		default:
			return state;
	}
}