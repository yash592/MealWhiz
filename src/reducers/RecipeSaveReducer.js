import { SAVE_RECIPE, DELETE_RECIPE } from "../actions/types";

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RECIPE:
      console.log('saved recipe reducer');
    case  DELETE_RECIPE:
      console.log('delete recipe reducer');
    default:
      return state;
  }
}
