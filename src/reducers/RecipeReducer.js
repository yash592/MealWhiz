import { FETCH_RECIPE } from '../actions/types'; 

const initialState = {
	meals: '',
}


export default (state = initialState, action) => {
	// console.log(action)
	switch (action.type) {
		case FETCH_RECIPE:
			console.log('from reducer');
			return action.payload;
			console.log(initialState.meals)
	default:
		return state;
	}
}