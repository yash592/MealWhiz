import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes, searchTermChange, fetchRecipesByCals } from '../actions';
import { ListView, FlatList } from 'react-native';
import axios from 'axios';
import ListItemColumn from './ListItemColumn';
import ListItemTile from './ListItemTile';
import { List, ListItem, SearchBar } from "react-native-elements";



class FetchRecipes extends Component {

	// componentWillMount() {
	//
	// 	this.createDataSource(this.props);
	//
	// }
	//
	// componentWillReceiveProps(nextProps) {
	// 	console.log("nextProps", nextProps);
	// 	this.createDataSource(nextProps);
	// }
	//
	// createDataSource({ recipes }) {
	// 	console.log(this.props.recipes)
	// 	const ds = new ListView.DataSource({
	// 		rowHasChanged: (r1, r2) => r1 != r2
	// 	})
	//
	// 	this.dataSource = ds.cloneWithRows(recipes);
	// 	console.log("Datasource", recipes)
	// }


	renderRow=(recipe)=> {
		console.log('Tot to renderRow')
		console.log(recipe)
  		return <ListItemColumn
  				 recipe={recipe}
  				  />
  	}

		_renderItem = ({ item }) => (
			 // console.log(item)
			<ListItemTile
				title={item.recipe.label}
				avatar={item.recipe.image}
		 	/>

		)




		render() {
		console.log("Props", this.props.recipes);

		// this.createDataSource();
		return (
			<FlatList
				data={this.props.recipes}
				renderItem={this._renderItem}
				numColumns='2'
			 />

		);
	}
}


const mapStateToProps = state => {
	console.log(state);
	// return {
	// 	recipeSearchTerm: state.recipeSearch.recipeSearchTerm
	// }

	const recipes = _.map(state.recipe, (meals) => {
		return { ... meals }
	})
	return { recipes }
};





export default connect( mapStateToProps, { fetchRecipes, searchTermChange })(FetchRecipes);
