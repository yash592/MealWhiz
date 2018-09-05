import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const CategoryTiles = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tileStyle}>
      {children}
    </TouchableOpacity>
  );
};

const styles = {
  tileStyle: {
    width: '33%',
    height: '33%',
    padding: 20,
    shadowColor :'black',
    shadowOffset: {width:20, height: 20},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { CategoryTiles }
