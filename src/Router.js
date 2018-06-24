import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 45 }}>
			<Scene key='root' hideNavBar>
				<Scene key='auth'>
					<Scene key='login' component={LoginForm} title='MealWhiz authentication' initial />
				</Scene>
			</Scene>
		</Router>

	);
};

export default RouterComponent;