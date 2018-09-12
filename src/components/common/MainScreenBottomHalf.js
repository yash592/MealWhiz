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
    backgroundColor: '#f9fbe7',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5
    }
})

export { MainScreenBottomHalf }
