import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RecipeReducer from './RecipeReducer';
import RecipeSearchReducer from './RecipeSearchReducer';




export default combineReducers({
	auth: AuthReducer,
	recipe: RecipeReducer,
	recipeSearch: RecipeSearchReducer
});