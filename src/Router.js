import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import FetchRecipes from './components/FetchRecipes';
import SearchRecipes from './components/SearchRecipes';
import MainScreen from './components/MainScreen';
import SearchRecipesByCals from './components/SearchRecipesByCals';



// <Scene key='auth'>
// 				<Scene
// 					key='login'
// 					component={LoginForm}
// 					 initial />
// 			</Scene>



const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 15 }}>
			<Scene key='root' hideNavBar>
				<Scene key='MainScreen' drawer={true}>
					<Scene
						key='MainScreen'
						component={MainScreen}
						title='Brocolly'
						initial
					/>
				</Scene>

				<Scene key='SearchRecipes'>
					<Scene
						key='SearchRecipes'
						component={SearchRecipes}
						title='Search'
						back='true'
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

				<Scene key="FetchRecipes">
					<Scene
						key='FetchRecipes'
						component={FetchRecipes}
						title='Results'
						back
				 />
			 	</Scene>

 			</Scene>

		</Router>

	);
};

export default RouterComponent;
