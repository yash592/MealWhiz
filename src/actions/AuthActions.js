import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, IF_USER_LOGGED_IN, GOOGLE_LOGIN_USER, GOOGLE_LOGIN_USER_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';

// Action creators for textIputs
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


// firebase loginUser action
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

// firebase failed login action

const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL
	});
};

// firebase succesful login action

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.MainScreen();
};

// check to see if user is loggedIn to redirect user

export const ifUserLoggedIn = () => {
	console.log("Got to user login condition");
	return(dispatch) => {
		dispatch({type: IF_USER_LOGGED_IN})
		firebase.auth().onAuthStateChanged((user) => {
			user ? Actions.MainScreen() : Actions.LoginForm()
		})
	}
}


// Google login function

export const onGoogleSignIn = async () => {

		console.log('got to google login func')
		try {
					const result = await Expo.Google.logInAsync({
						androidClientId: '573284368555-8uabjejjkern8sv1uuddi824er8cg3a2.apps.googleusercontent.com',
						scopes: ['profile', 'email'],
					});
					if (result.type === 'success') {
						console.log(result);
						return result;
					} else {
						return {cancelled: true};
					}

				} catch(e) {
					return {error: true};
		}


}

export const googleSignIn = () => {
	return(dispatch) => {
		dispatch({type: GOOGLE_LOGIN_USER})
			onGoogleSignIn()
				.then(result => googleLoginSuccess(dispatch, result))
	}
}


googleLoginSuccess = (dispatch, result) => {
	dispatch({
		type: GOOGLE_LOGIN_USER_SUCCESS,
		payload: result
	})
	Actions.MainScreen();
}


// const onGoogleLoginSuccess = (dispatch,)
