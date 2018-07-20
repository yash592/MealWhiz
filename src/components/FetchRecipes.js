import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';

class mealContainer extends Component {

	componentDidMount() {
		console.log("Got to mealContainer")
		console.log(this.props.recipes);
	}

	render() {
		return (
			<Text>Meal page is here</Text>
		)
	}
}

const mapStateToProps = state => {
	return {
		recipes: state.recipe.results
	}
}

export default connect(mapStateToProps, { fetchRecipes })(mealContainer);