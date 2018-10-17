import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from '../actions';
import { Tile } from 'react-native-elements';
import { Text, View } from 'react-native';
import { fetchSavedRecipes } from '../actions';

class SavedRecipes extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchSavedRecipes();
  }

  render() {
    return (
      <Text>Hi</Text>
    )
  }
}

export default connect (null, { fetchSavedRecipes }) (SavedRecipes);
