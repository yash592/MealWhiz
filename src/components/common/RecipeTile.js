import React, { Component } from 'react';
import { View } from 'react-native';

const RecipeTile = (props) => {
  return (
    <View style = {styles.RecipeTile}>
      {props.children}
    </View>
  )
}

const styles = {
  RecipeTile: {
    width: '50%',
    height: '50%',
    padding: 5
  }
}

export { RecipeTile };
