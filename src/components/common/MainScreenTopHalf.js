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
    backgroundColor: '#F1F2EC',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export  { MainScreenTopHalf }
