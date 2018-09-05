import { FETCH_RECIPE, SEARCH_TILE } from '../actions/types';

const initialState = {
	meals: '',
}


export default (state = initialState, action) => {
	// console.log(action)
	switch (action.type) {
		case FETCH_RECIPE:
			console.log('from reducer');
			return action.payload;
		case SEARCH_TILE:
			console.log('from search tile reducer');
			return action.payload;
	default:
		return state;
	}
}
