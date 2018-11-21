import React, { Component } from 'react';
import Router from './src/Router'
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import FetchRecipes from './src/components/FetchRecipes';
import SearchRecipes from './src/components/SearchRecipes';
import ListItemTile from './src/components/ListItemTile';
import MainScreen from './src/components/MainScreen';
import SearchRecipesByCals from './src/components/SearchRecipesByCals';



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
