import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, IF_USER_LOGGED_IN } from './types';
import { Actions } from 'react-native-router-flux';


export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};



export const loginUser = ({ email, password }) => {
	// console.log("Got here")
  return (dispatch) => {
  		dispatch({ type: LOGIN_USER })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
      	firebase.auth().createUserWithEmailAndPassword(email, password)
      		.then(user => loginUserSuccess(dispatch, user))
      		.catch(() => loginUserFail(dispatch))
      })
  };
};

const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL
	});
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.MainScreen();
};

export const ifUserLoggedIn = () => {
	console.log("Got to user login condition");
	return(dispatch) => {
		dispatch({type: IF_USER_LOGGED_IN})
		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				console.log('user is logged in');
				console.log(user);
				Actions.MainScreen();

			}
			else {
				console.log('User is not logged in');
				Actions.LoginForm();
			}
		})
	}
}
