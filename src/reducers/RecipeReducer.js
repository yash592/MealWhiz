import { FETCH_RECIPE } from '../actions/types'; 

const initialState = []





export default (state = initialState, action) => {
	console.log(action)
	switch (action.type) {
		case FETCH_RECIPE:
			return [...state, action.payload]
	default:
		return state;
	}
}