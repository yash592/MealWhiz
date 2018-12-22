import React, { Component } from 'react';
import {  Container } from './common';
import { CardSection, RecipeTile } from './common';
import { connect } from 'react-redux';
import { recipeSave, fetchSavedRecipes } from '../actions';

import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View, Image, CameraRoll } from 'react-native';
import { Tile } from 'react-native-elements';
import { Font } from 'expo';


class ListItemTile extends Component {

  state = {
   fontLoaded: false,
 };

  async componentWillMount() {
    console.log(this.props);
    await Font.loadAsync({
     'Ubuntu': require("./assets/fonts/Ubuntu-Regular.ttf"),
   });
   this.setState({ fontLoaded: true });
  }

  onLikePress() {
      console.log('recipe save button clicked');
      const  title  = this.props.title;
      const  thumbnail  = this.props.avatar;
      // this.props.recipeSave({ title, thumbnail })
      this.props.fetchSavedRecipes();
  }


  render() {
    const title  = this.props.title;
    const thumbnail  = this.props.image;
    // const ingredients = this.props.ingredients
    // const healthLabel = this.props.healthLabel
    const calories = this.props.calories
    // const servings = this.props.servings
    console.log('calories', calories);
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
    color: 'black',
    fontFamily: 'Ubuntu',
  }
}


export default connect(null, { recipeSave, fetchSavedRecipes } ) (ListItemTile);
