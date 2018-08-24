import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainScreenBottomHalf = (props) => {
  return (
    <View style = {styles.bottomHalf}>
    {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomHalf: {
    height: '70%',
    backgroundColor: '#98FB98',
    flexDirection: 'row',
    flexWrap: 'wrap'
    }
})

export { MainScreenBottomHalf }
