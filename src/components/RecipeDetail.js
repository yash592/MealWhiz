import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipeDetail } from '../actions';
import { View, Text, Image, FlatList } from 'react-native';
import _ from 'lodash';
import { Font } from 'expo';


// SourceSansPro-Regular


class RecipeDetail extends Component {

  state = {
     fontLoaded: false,
   };

    async componentWillMount() {
      console.log(this.props);
      await Font.loadAsync({
       'SourceSansPro': require("./assets/fonts/SourceSansPro-Regular.ttf"),
     });
     this.setState({ fontLoaded: true });
    }


  render() {
    console.log('recipedetail props', this.props);
    const {title, thumbnail, ingredients, healthLabel, calories, servings} = this.props;
    return (
      this.state.fontLoaded ?
      <View style={{flexDirection: 'column', flex: 1, backgroundColor: '#F4F3F0'}}>

        <Image source={{uri: thumbnail}} style={{width: '100%', height: '50%', borderWidth: 1, borderColor: 'black'}}/>
        <Text style={{flex: 1, fontFamily: 'SourceSansPro', fontSize: 40, textShadowOffset:{width: -1, height: 1, textShadowRadius: 10}}}> {title} </Text>
        <FlatList data={this.props.ingredients} renderItem={({item}) => <Text>{item}</Text>} />
        <Text> {healthLabel} </Text>
        <Text> {calories} </Text>
        <Text> {servings} </Text>

      </View> : null

    )
  }
}

const mapStatetoProps = state => {
  console.log('state', state.recipeDetail);
  return {
    title: state.recipeDetail.title,
    thumbnail: state.recipeDetail.thumbnail,
    ingredients: state.recipeDetail.ingredients.map((el) =>  el),
    healthLabel: state.recipeDetail.healthLabel,
    calories: state.recipeDetail.calories,
    servings: state.recipeDetail.servings
  }
}

// const recipes = _.map(state.recipe, (list) => {
//   return { ...list }
// })
// // console.log('mapstatetoprops',  recipes);
// return { recipes }

export default connect(mapStatetoProps, { fetchRecipeDetail }) (RecipeDetail)
