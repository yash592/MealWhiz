import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipeDetail } from '../actions';
import { View, Text } from 'react-native';
import _ from 'lodash';




class RecipeDetail extends Component {


  render() {
    console.log('recipedetail props', this.props.title);
    return (
      <Text> {this.props.title} </Text>

    )
  }
}

const mapStatetoProps = state => {
  console.log(state.recipeDetail);
  return {
    title: state.recipeDetail.title
  }
}

export default connect(mapStatetoProps, { fetchRecipeDetail }) (RecipeDetail)
