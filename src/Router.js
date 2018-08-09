import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import FetchRecipes from './components/FetchRecipes'

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 15 }}>
			<Scene key='root' hideNavBar>
				<Scene key='auth'>
					<Scene key='login' component={LoginForm} title='MealWhiz authentication' initial />
				</Scene>
				<Scene key="mainScreen">
					<Scene 
					rightTitle='Add Employee'
					// onRight={() => Actions.employeeCreate()}
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