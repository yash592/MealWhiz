import { SAVE_RECIPE, DELETE_RECIPE, FETCH_SAVED_RECIPES } from "../actions/types";

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RECIPE:
      console.log('saved recipe reducer');
    case DELETE_RECIPE:
      console.log('delete recipe reducer');
    case FETCH_SAVED_RECIPES:
      console.log('fetch saved recipes reducer');
      default:
        return state;

  }
}
