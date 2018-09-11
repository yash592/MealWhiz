import React, { Component } from 'react';
import { View } from 'react-native';

const RecipeLayout = (props) => {
  return (
    <View style = {styles.RecipeLayout}>
      {props.children}
    </View>
  )
}

const styles = {
  RecipeLayout: {
    flexDirection:'row',
    
    flexWrap: 'wrap',
    backgroundColor: 'red'
  }
}

export { RecipeLayout };
