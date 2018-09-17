import React, { Component } from 'react';
import {  StyleSheet, Text, TouchableWithoutFeedback, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { MainScreenTopHalf, MainScreenBottomHalf, CategoryTiles } from './common';
import { searchTile } from '../actions';
import { Actions } from 'react-native-router-flux';
import { fetchRecipesBalanced, fetchRecipes, quickRecipes, highProteinRecipes, highFatRecipes, veganRecipes } from '../actions';

class MainScreen extends Component {

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>

        <MainScreenTopHalf>
            <Image source={require('./assets/brocolly.png')} style={styles.logo} />
        </MainScreenTopHalf>

        <MainScreenBottomHalf>

          <CategoryTiles onPress={Actions.SearchRecipes}>
              <Image
                style={styles.tileImage}
                source={require('./assets/search.png')}
              />
              <Text style={styles.tileText}>Search Recipes</Text>

          </CategoryTiles>
            <CategoryTiles onPress={Actions.SearchRecipesByCals}>
              <Image
                style={styles.tileImage}
                source={require('./assets/searchcals.png')}
             />
             <Text style={styles.tileText}>Search by Cals</Text>
          </CategoryTiles>
          <CategoryTiles onPress={() => this.props.quickRecipes()}>
              <Image
                style={styles.tileImage}
                source={require('./assets/pasta.png')}
              />
              <Text style={styles.tileText}>Quick ones</Text>
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/fe.png')}
              />
              <Text style={styles.tileText}>Balanced</Text>
          </CategoryTiles>
          <CategoryTiles onPress={() => this.props.highProteinRecipes()}>
              <Image
                style={styles.tileImage}
                source={require('./assets/chicken-leg.png')}
              />
              <Text style={styles.tileText}>High Protein</Text>
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/cheese.png')}
              />
              <Text style={styles.tileText}>High Fat</Text>
          </CategoryTiles>
          <CategoryTiles onPress={() => this.props.veganRecipes()}>
              <Image
                style={styles.tileImage}
                source={require('./assets/avocado.png')}
              />
              <Text style={styles.tileText}>Vegan</Text>
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/vegetarian.png')}
              />
              <Text style={styles.tileText}>Vegetarian</Text>
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/salad.png')}
              />
              <Text style={styles.tileText}>Paleo</Text>
          </CategoryTiles>

        </MainScreenBottomHalf>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#F1F2EC',
    backgroundColor: '#FFCCBC',
    flex: 1
  },
  topHalf: {
    height: '30%',
    // backgroundColor: '#ff8a65',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    flex: 0.6,
    width: '100%',
    height: "70%",
    resizeMode: 'contain'
  },
  tileImage: {
    // flex:1,
    width: "39%",
    height: "35%",
    position: 'relative'

    // backgroundColor: 'black'
  },
  tileText: {
    flex: 0.3,
    position: 'relative',
    margin: 5,
    color: 'red'
  }

})

export default connect (null, { fetchRecipes, fetchRecipesBalanced, quickRecipes, highProteinRecipes, highFatRecipes, veganRecipes }) (MainScreen);
