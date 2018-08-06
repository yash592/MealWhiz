import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes } from '../actions';
import axios from 'axios';

class FetchRecipes extends Component {

	componentWillMount() {
		
		this.props.fetchRecipes();
		// console.log("Got to mealContainer")
		
	}

	// createDataSource({ recipes }) {
	// 	const ds = new ListView.DataSource({
	// 		rowHasChanged: (r1, r2) => r1 != r2
	// 	})

	// 	this.dataSource = ds.cloneWithRows(recipes);
	// 	console.log(this.dataSource)
	// }



		render() {
		console.log("Props", this.props.recipes);
		// this.createDataSource();	
		return (

		<Text>Hi</Text>		
				
		)
	}
}


const mapStateToProps = state => {
	console.log(state)
	const recipes = _.map(state.recipe.meals, (title) => {
		return { title }
	})
	return {recipes}
};





export default connect( mapStateToProps, { fetchRecipes })(FetchRecipes);