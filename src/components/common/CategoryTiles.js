import React from 'react';
import { View } from 'react-native';

const CategoryTiles = (props) => {
  return (
    <View elevation={5} style={styles.tileStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  tileStyle: {
    height: '33%',
    width: '33%',
    padding: 20,
    shadowColor :'black',
    shadowOffset: {width:20, height: 20},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5
  }
}

export { CategoryTiles }
