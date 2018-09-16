import axios from 'axios';
import { FETCH_RECIPE, SEARCHTERM_CHANGE, SEARCH_TILE, SEARCHCALORIE_CHANGE_MIN, SEARCHCALORIE_CHANGE_MAX, FETCH_RECIPE_CAL, FETCH_RECIPE_BALANCED, QUICK_RECIPE, HIGH_PROTEIN_RECIPE, HIGH_FAT_RECIPE, VEGAN_RECIPE } from './types';
import { Actions } from 'react-native-router-flux';

// Edamam App ID: 72f05384
// Edamam App Keys: 768f219116c35bb3a3ae7441e28d7c36

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

// ------------------------------------------------Actions for API calls--------------------------------------------------------------------------- //

// API keys edamam

const appId = '72f05384';
const appKey = '768f219116c35bb3a3ae7441e28d7c36';

// fetchRecipes by searchTerm

export const fetchRecipes = ( recipeSearchTerm ) => {
	console.log('Got to fetchRecipesByCals action');
	let url = `https://api.edamam.com/search?q=${recipeSearchTerm}=&app_id=${appId}&app_key=${appKey}&from=0&to=40`
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


// fetchRecipes by Calories


export const fetchRecipesByCals = (min, max) => {
	console.log('Got to fetchRecipesByCals action');
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

// balancedRecipes

export const fetchRecipesBalanced = () => {
	console.log('Got to balanced cals');
	let url = `https://api.edamam.com/search?q=rice&app_id=${appId}&app_key=${appKey}&from=0&to=20&diet=balanced`
	console.log(url);
	return(dispatch) => {
		return axios.get(url)
			.then(response => {
				console.log(response.data.hits);
			})
	}

}

// quickRecipes

export const quickRecipes = () => {
	console.log('Got to quick recipes');
	let url = `https://api.edamam.com/search?q=rice&app_id=${appId}&app_key=${appKey}&from=0&to=20&time=20`
	console.log(url);
	return(dispatch) => {
		return axios.get(url)
			.then(response => {
				console.log(response)
			})
	}
}

// highProtein recipe

export const highProteinRecipes = () => {
	console.log('got to high protein recipes');
	let url = `https://api.edamam.com/search?q=&app_id=${appId}&app_key=${appKey}&diet=high-protein`
	console.log(url);
	return(dispatch) => {
		return axios.get(url)
			.then(response => {
				console.log(response)
			})
	}
}

// highFat recipes

export const highFatRecipes = () => {
	console.log('got to high fat recipes');
	let url = `https://api.edamam.com/search?q=&app_id=${appId}&app_key=${appKey}&diet=high-fat`
	console.log(url);
	return(dispatch) => {
		return axios.get(url)
			.then(response => {
				console.log(response)
			})
	}
}



// vegan recipes

export const veganRecipes = () => {
	console.log('got to vegan recipes');
	let url = `https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}&health=vegan`
	console.log(url);
	return(dispatch) => {
		return axios.get(url)
			.then(response => {
				console.log(response.data.hits)
			})
	}
}

// vegetarian recipes

export const vegetarianRecipes = () => {
	console.log('got to vegetarian recipes');
	let url = `https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}&health=vegetarian`
	console.log(url);
	return(dispatch) => {
		return axios.get(url)
			.then(response => {
				console.log(response.data.hits)
			})
	}
}

// paleo recipes



// export const searchTile = (dispatch) => {
// 	console.log('Got to search tile');
// 	return (dispatch) => {
// 		dispatch({
// 			type: SEARCH_TILE,
// 			payload: null
// 		})
// 		Actions.SearchRecipes()
// 	}
// }
