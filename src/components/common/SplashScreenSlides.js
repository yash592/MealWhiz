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
    image: require('../assets/broccoli2.png'),

    colors: ['#E3EBFF', '#C6DD4E'],
  },
  {
    key: 'slideTwo',
    title: 'Save Recipes',
    text: 'Save your favorite recipes, add the ingredients needed to your shopping cart and share them on your favorite social networks!',
    image: require('../assets/broccoli2.png'),
    colors: ['#E3EBFF', '#FDE53D'],
  },
  {
    key: 'slideThree',
    title: 'Share your recipes!',
    text: 'Share your saved recipes on your favorite social media websites!',
    image: require('../assets/broccoli2.png'),
    colors: ['#E3EBFF', '#FEB834'],
  },
];






export { splashScreenSlides }
