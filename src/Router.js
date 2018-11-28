import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import FetchRecipes from './components/FetchRecipes';
import SearchRecipes from './components/SearchRecipes';
import MainScreen from './components/MainScreen';
import SearchRecipesByCals from './components/SearchRecipesByCals';
import SavedRecipes from './components/SavedRecipes'
import SplashScreen from './components/SplashScreen'

// <Scene key='auth'>
// <Scene
// 	hideNavBar={true}
// 	key='login'
// 	component={LoginForm}
// 	 initial />
// 	 </Scene>

const RouterComponent = () => {
	return (
		<Router>
			<Scene key='root' hideNavBar>
				<Scene key='auth'>
					<Scene
						hideNavBar={true}
						key='login'
						component={SplashScreen}
						 initial
				  />
			 </Scene>

				<Scene key='MainScreen'>
					<Scene
						hideNavBar
						key='MainScreen'
						component={MainScreen}
						// title='Brocolly'
					/>
				</Scene>
				<Scene key='LoginForm' back='false'>
					<Scene
						hideNavBar
						key='LoginForm'
						component={LoginForm}
						// title='Brocolly'
					/>
				</Scene>

				<Scene key='SearchRecipes' title='Search' back='true'>
					<Scene
						key='SearchRecipes'
						component={SearchRecipes}
					/>
				</Scene>

				<Scene key="SearchRecipesByCals">
					<Scene
						key='SearchRecipesByCals'
						component={SearchRecipesByCals}
						title='Search Recipes by Calories'
						back
				 />
			 	</Scene>
				<Scene key="SavedRecipes">
					<Scene
						key='SavedRecipes'
						component={SavedRecipes}
						title='Search Recipes by Calories'
						back
				 />
			 	</Scene>

				<Scene key="FetchRecipes">
					<Scene
						key='FetchRecipes'
						component={FetchRecipes}
						back
				 />
			 	</Scene>

 			</Scene>

		</Router>

	);
};

export default RouterComponent;
