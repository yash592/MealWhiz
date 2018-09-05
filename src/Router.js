import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import FetchRecipes from './components/FetchRecipes';
import SearchRecipes from './components/SearchRecipes';
import MainScreen from './components/MainScreen';


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

				<Scene key='MainScreen'>
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
					/>
				</Scene>

				<Scene key="mainScreen">
					<Scene
					rightTitle='Add Employee'
					onRight={() => Actions.SearchRecipes()}
					key='FetchRecipes'
					component={FetchRecipes}
					title='Meals'
					initial
				 />
			 	</Scene>

 			</Scene>

		</Router>

	);
};

export default RouterComponent;
