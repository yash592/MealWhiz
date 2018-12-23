import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipeDetail } from '../actions';
import { View, Text, Image } from 'react-native';
import _ from 'lodash';




class RecipeDetail extends Component {


  render() {
    console.log('recipedetail props', this.props.title);
    const pic = this.props.thumbnail;
    return (
      <View style={{flexDirection: 'column', flex: 1, backgroundColor: '#FFCCBC'}}>

        <Image source={{uri: pic}} style={{width: '100%', height: 300}}/>
        <Text style={{flex: 1}}> {this.props.title} </Text>
        <Text> {this.props.ingredients} </Text>
      </View>

    )
  }
}

const mapStatetoProps = state => {
  console.log('state', state.recipeDetail);
  return {
    title: state.recipeDetail.title,
    thumbnail: state.recipeDetail.thumbnail,
    ingredients: state.recipeDetail.ingredients
  }
}

export default connect(mapStatetoProps, { fetchRecipeDetail }) (RecipeDetail)
