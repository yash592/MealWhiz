import axios from 'axios';
import { FETCH_RECIPE, SEARCHTERM_CHANGE, SEARCH_TILE, SEARCHCALORIE_CHANGE_MIN, SEARCHCALORIE_CHANGE_MAX, FETCH_RECIPE_CAL } from './types';
import { Actions } from 'react-native-router-flux';

// Actions for form inputs

export const searchTermChange = (text) => {
	console.log(text)
	return {
		type: SEARCHTERM_CHANGE,
		payload: text
	};
};

export const searchByCaloriesTermMin = (text) => {
	console.log(text)
	return {
		type: SEARCHCALORIE_CHANGE_MIN,
		payload: text
	};
};

export const searchByCaloriesTermMax = (text) => {
	console.log(text)
	return {
		type: SEARCHCALORIE_CHANGE_MAX,
		payload: text
	};
};

// Actions for API calls

export const fetchRecipes = ( recipeSearchTerm ) => {
	console.log('Got to fetchRecipesByCals action');
	let appId = '72f05384'
	let appKey = '768f219116c35bb3a3ae7441e28d7c36'
	let url = `https://api.edamam.com/search?q=${recipeSearchTerm}=&app_id=${appId}&app_key=${appKey}&from=0&to=20`
	console.log(url);
	return(dispatch) => {
		return axios.get(url)
			.then(response => {
				console.log(response);
				dispatch({
					type: FETCH_RECIPE,
					payload: response.data.hits
				})
				Actions.FetchRecipes();
			})
	}
}

// Edamam App ID: 72f05384
// Edamam App Keys: 768f219116c35bb3a3ae7441e28d7c36

export const fetchRecipesByCals = (min, max) => {
	console.log('Got to fetchRecipesByCals action');
	let appId = '72f05384'
	let appKey = '768f219116c35bb3a3ae7441e28d7c36'
	let url = `https://api.edamam.com/search?q=&app_id=${appId}&app_key=${appKey}&from=0&to=20&calories=${min}-${max}`
	console.log(url);
	return(dispatch) => {
		return axios.get(url)
			.then(response => {
				console.log(response);
				dispatch({
					type: FETCH_RECIPE_CAL,
					payload: response.data.hits
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
