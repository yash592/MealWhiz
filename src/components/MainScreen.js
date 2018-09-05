import React, { Component } from 'react';
import {  StyleSheet, Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { MainScreenTopHalf, MainScreenBottomHalf, CategoryTiles } from './common';
import { searchTile } from '../actions';
import { Actions } from 'react-native-router-flux';




class MainScreen extends Component {

  onTilePress() {
    console.log("HELLO");
    // this.props.searchTile();
  }

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

          </CategoryTiles>
            <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/fe.png')}
             />
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/fe.png')}
              />
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={require('./assets/fe.png')}
              />
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
    flex:0.7,
    // width: '100%',
    // height: '100%',
    position: 'relative',
    // backgroundColor: 'black'
  }

})

export default connect (null, { searchTile }) (MainScreen);
