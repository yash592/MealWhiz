import React, { Component } from 'react';
import { BoxContainer, Container } from './common';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';


class RecipeTileLayout extends Component {
  render() {
    return (
      <Container>
        <BoxContainer>
          <Text>
            Hi
          </Text>
        </BoxContainer>
      </Container>
    )
  }
}

const styles = {
  text: {
    flex: 0.3
  }
}

export default RecipeTileLayout;
