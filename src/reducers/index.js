import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RecipeReducer from './RecipeReducer';



export default combineReducers({
	auth: AuthReducer,
	recipe: RecipeReducer
});