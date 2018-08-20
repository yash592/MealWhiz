import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { fetchRecipes, searchTermChange } from '../actions';


class SearchRecipes extends Component {


	recipeSearchTerm(text) {
		this.props.searchTermChange(text)
	}

	onSearch() {
		const { recipeSearchTerm } = this.props;
		console.log(recipeSearchTerm, "from search button")
		this.props.fetchRecipes(recipeSearchTerm);
	}


	render() {
		console.log(this.props)
		return (
			<View>
					<FormLabel>Recipe</FormLabel>
					<FormInput
						label="Recipe"
						placeholder="e.g Burrito, Omelette"
						onChangeText={this.recipeSearchTerm.bind(this)}
						value={this.props.recipeSearchTerm}
					/>
					
					<Button
						title='Search'
						color='white'
						backgroundColor='#FF5722'
						onPress={this.onSearch.bind(this)}>
						Search
					</Button>
				</View>
		)
	}
}



const mapStateToProps = state => {
	return {
		recipeSearchTerm: state.recipeSearch.recipeSearchTerm
	}
}
export default connect (mapStateToProps, { searchTermChange, fetchRecipes }) (SearchRecipes);
