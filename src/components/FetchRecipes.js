import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes } from '../actions';
import axios from 'axios';

class FetchRecipes extends Component {

	componentWillMount() {
		
		this.props.fetchRecipes();
		console.log("Got to mealContainer")
		
	}

	render() {
		console.log(this.props.recipes)	
		return (

		<Text> Yeah, bitch!! </Text>		
				
		);
	}
}

const mapStateToProps = state => {
	console.log(state)
	return {
		recipes: state.recipe.meals		
	};
};





export default connect( mapStateToProps, { fetchRecipes })(FetchRecipes);