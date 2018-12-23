import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RecipeReducer from './RecipeReducer';
import RecipeSearchReducer from './RecipeSearchReducer';
import RecipeSaveReducer from './RecipeSaveReducer';
import RecipeDetailReducer from './RecipeDetailReducer';





export default combineReducers({
	auth: AuthReducer,
	recipe: RecipeReducer,
	recipeDetail: RecipeDetailReducer,
	recipeSearch: RecipeSearchReducer,
	recipeSave: RecipeSaveReducer
});
