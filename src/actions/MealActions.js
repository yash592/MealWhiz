import axios from 'axios';
import { FETCH_RECIPE } from './types';

export const fetchRecipes = () => {
	// console.log('Got to mealActions')
	return (dispatch) => {
		return axios.get('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3')
		    .then(response => {
		    	console.log("API response" , response);
				dispatch({
					type: FETCH_RECIPE,
					payload: response.data.results

				})
			})

	}
}