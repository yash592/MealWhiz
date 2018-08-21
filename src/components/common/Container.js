import React from 'react';
import { View } from 'react-native';

const Container = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = {
    container: {
    backgroundColor: '#C6DD4E',
    // flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'flex-end'
  }

}

export { Container }
