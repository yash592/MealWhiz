import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainScreenTopHalf = (props) => {
  return (
    <View style = {styles.topHalf}>
    {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  topHalf: {
    height: '30%',
    // backgroundColor: '#FCEBBF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export  { MainScreenTopHalf }
