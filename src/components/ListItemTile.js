import React, { Component } from 'react';
import {  Container } from './common';
import { CardSection, RecipeTile } from './common';

import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Tile } from 'react-native-elements';


class ListItemTile extends Component {
  render() {
    const  title  = this.props.title;
    const  thumbnail  = this.props.avatar;
    console.log(title, thumbnail);

    return (
      <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#FFCCBC'}}>
        <RecipeTile onPress={()=>console.log(this.props.title)}>
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


export default ListItemTile;
