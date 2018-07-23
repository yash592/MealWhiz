import axios from 'axios';
import { FETCH_RECIPE } from './types';

export const fetchRecipes = () => {
	console.log('fetch recipes')
	return(dispatch) => {
		return axios.get('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3')
		    .then(recipes => {
				dispatch({
					type: FETCH_RECIPE,
					payload: recipes
				})
			})

	}
	

}