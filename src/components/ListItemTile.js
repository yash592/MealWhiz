import React, { Component } from 'react';
import {  Container } from './common';
import { CardSection } from './common';

import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Tile } from 'react-native-elements';


class ListItemTile extends Component {
  render() {
    const  title  = this.props.title;
    const  thumbnail  = this.props.avatar;
    console.log(title, thumbnail);

    return (
      <TouchableWithoutFeedback>
				<View style={{flexDirection: 'column', flex: 1}}>

					<Tile
							style={styles.imgStyle}
							imageSrc={{uri: thumbnail ? thumbnail : 'http://www.pngpix.com/wp-content/uploads/2016/08/PNGPIX-COM-Fork-PNG-Transparent-Image-500x331.png'}}
							title={title} />

				</View>
			</TouchableWithoutFeedback>
    )
  }
}

const styles = {
	titleStyle: {
		fontSize: 8,
		paddingLeft: 15
	},
	imgStyle: {
    height: 100,
    flex: 1,
    width: '100%'
  }
}


export default ListItemTile;
