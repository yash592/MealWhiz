import React, { Component } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

const RecipeTile = ({onPress, children}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
    <View style = {styles.RecipeTile}>
      {children}
    </View>
    </TouchableNativeFeedback>
  )
}

const styles = {
  RecipeTile: {
    width: '90%',
    height: 250,
    backgroundColor: '#F9FBE7',
    // padding: 20,
    margin: 10,
    alignItems: 'center',
    // justifyContent: 'center',
    shadowColor :'black',
    shadowOffset: {width:20, height: 20},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 5
  }
}

export { RecipeTile };
