import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    flex: 0.6,
    width: '80%',
    height: "40%",
    resizeMode: 'contain'

  }
});

const splashScreenSlides = [
  {
    key: 'slideOne',
    title: 'Search Recipes',
    text: 'Search Recipes by calories, search term and look for meals in a variety of different ways!',
    image: require('../assets/brocolly.png'),

    colors: ['#E3EBFF', '#B0EBB4'],
  },
  {
    key: 'slideTwo',
    title: 'Save Recipes',
    text: 'Save your favorite recipes, add the ingredients needed to your shopping cart and share them on your favorite social networks!',
    image: require('../assets/brocolly.png'),
    colors: ['#E3EBFF', '#B0EBB4'],
  },
  {
    key: 'slideThree',
    title: 'titleThree',
    text: 'This is screen three',
    image: require('../assets/brocolly.png'),
    colors: ['#E3EBFF', '#B0EBB4'],
  },
];






export { splashScreenSlides }