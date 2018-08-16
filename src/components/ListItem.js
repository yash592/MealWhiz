import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
import { Tile } from 'react-native-elements';



class ListItem extends Component {
	onRowPress() {
		Actions.employeeEdit({ employee: this.props.employee });
	}


	render() {
		const { title, thumbnail } = this.props.recipe
		console.log("Thumbnail", thumbnail);
		return (
			<TouchableWithoutFeedback>
				<View>					
					<CardSection>
					<Tile
							style={styles.imgStyle}
							imageSrc={{uri: thumbnail ? thumbnail : 'http://www.pngpix.com/wp-content/uploads/2016/08/PNGPIX-COM-Fork-PNG-Transparent-Image-500x331.png'}}
							title={title} />
					</CardSection>
				</View>
			</TouchableWithoutFeedback>

		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	},
	imgStyle: {
    height: 300,
    flex: 1,
    width: 100
  }
}

export default ListItem;