import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes, searchTermChange, fetchRecipesByCals, recipeSave } from '../actions';
import { ListView, FlatList } from 'react-native';
import axios from 'axios';
import ListItemColumn from './ListItemColumn';
import ListItemTile from './ListItemTile';
import { List, ListItem, SearchBar } from "react-native-elements";



class FetchRecipes extends Component {

	renderRow = (recipe) => {
		console.log('Tot to renderRow')
		console.log(recipe)
  		return <ListItemColumn
  				 recipe={recipe}
  				  />
  	}

		_renderItem = ({ item }) => (

			<ListItemTile
				title={item.recipe.label}
				avatar={item.recipe.image}
		 	/>



		)

		_keyExtractor = (item, index) => item.recipe.calories

		render() {
		// console.log("Recipes from mapState", this.props.recipes);
		return (
			<FlatList
				data={this.props.recipes}
				renderItem={this._renderItem}
				keyExtractor={this._keyExtractor}
				numColumns='2'
			 />

		);
	}
}


const mapStateToProps = state => {
	const recipes = _.map(state.recipe, (list) => {
		return { ...list }
	})
	return { recipes }
};





export default connect( mapStateToProps, { fetchRecipes, searchTermChange, recipeSave })(FetchRecipes);
