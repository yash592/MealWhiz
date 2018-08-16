import axios from 'axios';
import { FETCH_RECIPE, SEARCHTERM_CHANGE } from './types';

export const searchTermChange = (text) => {
	console.log(text)
	return {
		type: SEARCHTERM_CHANGE,
		payload: text
	};
};

export const fetchRecipes = (recipeSearchTerm) => {
	console.log('Got to mealActions', recipeSearchTerm)
	return (dispatch) => {
		return axios.get('http://www.recipepuppy.com/api/?q=' + recipeSearchTerm + '&p=3')
		    .then(response => {
		    	console.log(response);
				dispatch({
					type: FETCH_RECIPE,
					payload: response.data.results

				})
			})

	}
}