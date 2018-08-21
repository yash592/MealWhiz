import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes, searchTermChange } from '../actions';
import { ListView, FlatList} from 'react-native';
import axios from 'axios';
import ListItemColumn from './ListItemColumn';
import ListItemTile from './ListItemTile';


class FetchRecipes extends Component {

	componentWillMount() {

		this.createDataSource(this.props);

	}

	componentWillReceiveProps(nextProps) {
		console.log("nextProps", nextProps);
		this.createDataSource(nextProps);
	}

	createDataSource({ recipes }) {
		console.log(this.props.recipes)
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 != r2
		})

		this.dataSource = ds.cloneWithRows(recipes);
		console.log("Datasource", recipes)
	}


	renderRow=(recipe)=> {
		console.log('Tot to renderRow')
		console.log(recipe)
  		return <ListItemColumn
  				 recipe={recipe}
  				  />
  	}




		render() {
		console.log("Props", this.props.recipes);
		// this.createDataSource();
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
				numColumns='3'
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
