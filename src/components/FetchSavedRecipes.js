import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { connect } from 'redux';
import { fetchSavedRecipes } from '../actions';

class FetchSavedRecipes extends Component {
  renderRow = () => {

  }

  _renderItem = ({ item }) => {

  }

  _keyExtractor = () =>

  render() {
    console.log("Saved recipes Fetch Props" , this.props.savedRecipes);
    return (
      <FlatList/>

    )
  }
}

const MapStateToProps = state => {
  console.log(state);;
}
