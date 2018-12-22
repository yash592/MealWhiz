import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, GOOGLE_LOGIN_USER, GOOGLE_LOGIN_USER_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
	 };

export default (state = INITIAL_STATE, action) => {
	// console.log('Got to reducer', action);
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER:
			return { ...state, loading:true, error: '' }
		case LOGIN_USER_SUCCESS:
			return { ...state,
			         user: action.payload,
	             error: '',
               loading: false,
	             email: '',
	             password: ''
            };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Auth failed.', password: '', loading: false }
		case GOOGLE_LOGIN_USER:
			return{ ...state }
		case GOOGLE_LOGIN_USER_SUCCESS:
			return {...state,
							user: action.payload
						};
		default:
			return state;
	}
};
