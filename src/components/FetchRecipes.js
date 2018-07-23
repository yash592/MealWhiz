import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes } from '../actions';
import axios from 'axios';

class FetchRecipes extends Component {

	componentDidMount() {
		console.log("Got to mealContainer")
		this.props.fetchRecipes;
		
	}

	render() {
		return (
			
			console.log(this.props)			
		);
	}
}

// const mapStateToProps = state => {
// 	return {
// 		recipes: state.recipe.recipes
		
// 	}
// }

const mapDispatchToProps = dispatch => {
	return {
		fetchData: fetchRecipes()
	};
}



export default connect( mapDispatchToProps)(FetchRecipes);