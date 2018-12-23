import { FETCH_RECIPE, SEARCH_TILE, FETCH_RECIPE_CAL, FETCH_RECIPE_QUICK, FETCH_RECIPE_DETAIL } from '../actions/types';

const initialState = {
	meals: '',
}


export default (state = initialState, action) => {
	// console.log(action)
	switch (action.type) {
		case FETCH_RECIPE:
			console.log('from reducer');
			return action.payload;
		case FETCH_RECIPE_CAL:
			console.log('from search tile reducer');
			return action.payload;
		case FETCH_RECIPE_QUICK:
			console.log('quick recipe reducer')
			return action.payload;
	default:
		return state;
	}
}
