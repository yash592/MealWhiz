import { FETCH_RECIPE_DETAIL } from '../actions/types';


const initialState = {
	meals: '',
}



// case FETCH_RECIPE_DETAIL:
// 	console.log('recipe detail reducer');
// 	return action.payload;

export default (state = initialState, action) => {
	// console.log(action)
	switch (action.type) {
    case FETCH_RECIPE_DETAIL:
    	console.log('recipe detail reducer');
    	return action.payload;
	default:
		return state;
	}
}
