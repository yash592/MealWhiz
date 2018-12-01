import React, { Component } from 'react';
import {  Container } from './common';
import { CardSection, RecipeTile } from './common';
import { connect } from 'react-redux';
import { recipeSave, fetchSavedRecipes } from '../actions';

import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View, Image, CameraRoll } from 'react-native';
import { Tile } from 'react-native-elements';


class ListItemTile extends Component {

  onLikePress() {
      console.log('recipe save button clicked');
      const  title  = this.props.title;
      const  thumbnail  = this.props.avatar;
      // this.props.recipeSave({ title, thumbnail })
      this.props.fetchSavedRecipes();
  }


  render() {
    const  title  = this.props.title;
    const  thumbnail  = this.props.avatar;
    // console.log(this.props)

    return (
      <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#FFCCBC'}}>
        <RecipeTile onPress={() => this.onLikePress()}>
  					<Image
  							style={styles.imgStyle}
  							source={{uri: thumbnail ? thumbnail : 'http://www.pngpix.com/wp-content/uploads/2016/08/PNGPIX-COM-Fork-PNG-Transparent-Image-500x331.png'}}
  					 />
             <Text style={styles.textStyle}>{title}</Text>
         </RecipeTile>
      </View>
    )
  }
}

const styles = {
	titleStyle: {
		fontSize: 8,
		paddingLeft: 15
	},
	imgStyle: {
    width: '100%',
    height: '75%',
    // flex: 1,
    // padding: 10
  },
  textStyle: {
    margin: 5,
    flex: 1,
    color: '#fd5523'
  }
}


export default connect(null, { recipeSave, fetchSavedRecipes } ) (ListItemTile);
