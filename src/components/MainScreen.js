import React, { Component } from 'react';
import {  StyleSheet, Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { MainScreenTopHalf, MainScreenBottomHalf, CategoryTiles } from './common'




class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreenTopHalf>
            <Image
              style={styles.logo}
              source={{uri: 'https://i.imgur.com/opw8T9w.png'}}
              resizeMode={'cover'}
            />
        </MainScreenTopHalf>
        <MainScreenBottomHalf>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={{uri: 'https://cdn1.iconfinder.com/data/icons/food-flat-square-rounded-shadow-vol-4/150/knife__cut__weapon__fork-512.png'}}
              />
          </CategoryTiles>
            <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={{uri: 'https://cdn1.iconfinder.com/data/icons/food-flat-square-rounded-shadow-vol-4/150/knife__cut__weapon__fork-512.png'}}
              />
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={{uri: 'https://cdn1.iconfinder.com/data/icons/food-flat-square-rounded-shadow-vol-4/150/knife__cut__weapon__fork-512.png'}}
              />
          </CategoryTiles>
          <CategoryTiles>
              <Image
                style={styles.tileImage}
                source={{uri: 'https://cdn1.iconfinder.com/data/icons/food-flat-square-rounded-shadow-vol-4/150/knife__cut__weapon__fork-512.png'}}
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
    flex: 1,
    

  }

})

export default MainScreen;
