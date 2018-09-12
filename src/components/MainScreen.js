import React, { Component } from 'react';
import {  StyleSheet, Text, TouchableWithoutFeedback, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { MainScreenTopHalf, MainScreenBottomHalf, CategoryTiles } from './common';
import { searchTile } from '../actions';
import { Actions } from 'react-native-router-flux';

class MainScreen extends Component {

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>

        <MainScreenTopHalf>
            <Text>BrocollY</Text>
        </MainScreenTopHalf>

        <MainScreenBottomHalf>

          <CategoryTiles onPress={Actions.SearchRecipes}>
              <Image
                style={styles.tileImage}
                source={require('./assets/fe.png')}
              />
              <Text style={styles.tileText}>Search Recipes</Text>

          </CategoryTiles>
            <CategoryTiles onPress={Actions.SearchRecipesByCals}>
              <Image
                style={styles.tileImage}
                source={require('./assets/fe.png')}
             />
             <Text style={styles.tileText}>Search by Cals</Text>
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/fe.png')}
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
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/fe.png')}
              />
              <Text style={styles.tileText}>High Protein</Text>
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/fe.png')}
              />
              <Text style={styles.tileText}>High Fat</Text>
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/fe.png')}
              />
              <Text style={styles.tileText}>Vegan</Text>
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/fe.png')}
              />
              <Text style={styles.tileText}>Vegetarian</Text>
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/fe.png')}
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
    flex: 1
  },
  topHalf: {
    height: '30%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 80+'%',
    width: 50+'%'
  },
  tileImage: {
    // flex:1,
    width: "30%",
    height: "30%",
    // position: 'relative',
    // backgroundColor: 'black'
  },
  tileText: {
    flex: 0.3,
    position: 'relative',
    margin: 5
  }

})

export default connect (null, { searchTile }) (MainScreen);
