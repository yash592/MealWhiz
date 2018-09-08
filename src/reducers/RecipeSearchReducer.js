import { FETCH_RECIPE, SEARCHTERM_CHANGE, SEARCHCALORIE_CHANGE_MIN, SEARCHCALORIE_CHANGE_MAX } from '../actions/types';

const INITIAL_STATE = {
	recipeSearchTerm: '',
	recipeSearchCalorieTermMin: '',
	recipeSearchCalorieTermMax: ''

};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SEARCHTERM_CHANGE:
			return { ...state, recipeSearchTerm: action.payload }
		case SEARCHCALORIE_CHANGE_MIN:
				return { ...state, recipeSearchCalorieTermMin: action.payload }
		case SEARCHCALORIE_CHANGE_MAX:
				return { ...state, recipeSearchCalorieTermMax: action.payload}
		default:
			return state;
	}
}
