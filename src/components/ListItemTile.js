import React, { Component } from 'react';
import {  Container } from './common';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Tile } from 'react-native-elements';


class RecipeTileLayout extends Component {
  render() {
    const { title, thumbnail } = this.props.recipe;
    console.log(title, thumbnail);

    return (
      <TouchableWithoutFeedback>
        <View>
          <Container>
            <Image
              style={{width: 30+'%', height: 100, flexDirection: 'row', justifyContent: 'flex-start'}}
              source={{uri: thumbnail ? thumbnail : 'http://www.pngpix.com/wp-content/uploads/2016/08/PNGPIX-COM-Fork-PNG-Transparent-Image-500x331.png'}}/>
          </Container>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}


export default RecipeTileLayout;
