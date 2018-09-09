import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { searchByCaloriesTermMin, searchByCaloriesTermMax, fetchRecipesByCals } from '../actions';


class SearchRecipesByCals extends Component {

  recipeCalsTextMin(text) {
    this.props.searchByCaloriesTermMin(text)
    console.log('hello from min cals')
  }

  recipeCalsTextMax(text) {
    this.props.searchByCaloriesTermMax(text)
    console.log('hello from max cals');
  }



  onSearch() {
    const { recipeCalsTextMin, recipeCalsTextMax } = this.props;

    this.props.fetchRecipesByCals(recipeCalsTextMin, recipeCalsTextMax );
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <FormLabel>Min Calories</FormLabel>
        <FormInput
          label='minCal'
          placeholder='Enter the minimum number of calories'
          onChangeText={this.recipeCalsTextMin.bind(this)}
          value={this.props.recipeCalsTextMin}
        />
        <FormLabel>Max calories</FormLabel>
        <FormInput
          label='maxCal'
          placeholder='Enter the maximum number of calories'
          onChangeText={this.recipeCalsTextMax.bind(this)}
          value={this.props.recipeCalsTextMax}
        />
        <Button
          title='Search'
          color='white'
          backgroundColor='#FF5722'
          onPress={this.onSearch.bind(this)}>
          Search
        </Button>
      </View>
    )
  }
}

const mapStatetoProps = state => {
  return {
    recipeCalsTextMin: state.recipeSearch.recipeSearchCalorieTermMin,
    recipeCalsTextMax: state.recipeSearch.recipeSearchCalorieTermMax
  }
}

export default connect (mapStatetoProps, { fetchRecipesByCals, searchByCaloriesTermMin, searchByCaloriesTermMax }) (SearchRecipesByCals)
