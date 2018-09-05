import axios from 'axios';
import { FETCH_RECIPE, SEARCHTERM_CHANGE, SEARCH_TILE } from './types';
import { Actions } from 'react-native-router-flux';


export const searchTermChange = (text) => {
	console.log(text)
	return {
		type: SEARCHTERM_CHANGE,
		payload: text
	};
};

export const fetchRecipes = ( recipeSearchTerm ) => {
	console.log('Got to mealActions', recipeSearchTerm);
	const url = 'http://www.recipepuppy.com/api/?q=' + recipeSearchTerm + '&p=10';
	console.log(url)
	return (dispatch) => {
		return axios.get(url)
		    .then(response => {
		    	console.log(response);
				dispatch({
					type: FETCH_RECIPE,
					payload: response.data.results
				})
				Actions.FetchRecipes();
			})
	}
}

export const searchTile = (dispatch) => {
	console.log('Got to search tile');
	return (dispatch) => {
		dispatch({
			type: SEARCH_TILE,
			payload: null
		})
		Actions.SearchRecipes()
	}
}
