import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes } from '../actions';
import { ListView } from 'react-native';
import axios from 'axios';
import ListItem from './ListItem';

class FetchRecipes extends Component {

	componentWillMount() {
		
		this.props.fetchRecipes();
		// console.log("Got to mealContainer");
		this.createDataSource(this.props);
		
	}

	componentWillReceiveProps(nextProps) {
		console.log("nextProps", nextProps);
		this.createDataSource(nextProps);
	}

	createDataSource({ recipes }) {
		// console.log(this.props.recipes)
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 != r2
		})

		this.dataSource = ds.cloneWithRows(recipes);
		console.log("Datasource", recipes)
	}


	renderRow(recipe) {	
		console.log(recipe)
  		return <ListItem recipe={recipe} />
  	}



		render() {
		console.log("Props", this.props.recipes);
		// this.createDataSource();	
		return (
			<ListView
				enableEmptySections 
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			 />	
				
		);
	}
}


const mapStateToProps = state => {
	console.log(state)
	const recipes = _.map(state.recipe, (meals) => {
		return { ... meals }
	})
	return { recipes }
};





export default connect( mapStateToProps, { fetchRecipes })(FetchRecipes);