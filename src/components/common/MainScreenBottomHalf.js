import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

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
    // backgroundColor: '#FCEBBF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    flex: 1
    }
})

export { MainScreenBottomHalf }
