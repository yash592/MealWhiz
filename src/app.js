import React, { Component } from 'react';
import Router from './Router'
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import FetchRecipes from './components/FetchRecipes';
import SearchRecipes from './components/SearchRecipes';
import ListItemTile from './components/ListItemTile';
import MainScreen from './components/MainScreen';
import SearchRecipesByCals from './components/SearchRecipesByCals';



import ReduxThunk from 'redux-thunk';

class App extends Component {

	componentWillMount() {
		const config = {
			apiKey: "AIzaSyCQNyzfk6xa3h7Ex3pgZXOtH6JvN8uWeiM",
			    authDomain: "mealwhiz-9e353.firebaseapp.com",
			    databaseURL: "https://mealwhiz-9e353.firebaseio.com",
			    projectId: "mealwhiz-9e353",
			    storageBucket: "",
			    messagingSenderId: "27635687300"
			  };

			  firebase.initializeApp(config);
		}

		render() {
			const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


			return (

				<Provider store={store}>
					<Router />
				</Provider>

				);
		}
}

export default App;
