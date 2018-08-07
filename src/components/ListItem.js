import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';



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
						<Text style={styles.titleStyle}>
							{title}
						</Text>						
					</CardSection>
					<CardSection>
					<Image
							style={styles.imgStyle}
							source={{uri: thumbnail}} />
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