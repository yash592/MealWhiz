import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, ImageBackground  } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import AppIntroSlider from 'react-native-app-intro-slider';
import { splashScreenSlides } from './common/SplashScreenSlides';
import { MainScreenTopHalf, MainScreenBottomHalf, CategoryTiles } from './common';
import { ifUserLoggedIn } from '../actions';

const style = StyleSheet.create({
  image: {
    flex: 0.6,
    width: '80%',
    height: "40%",
    resizeMode: 'contain'

  }
});


const slides = [
  {
    key: 'slideOne',
    title: 'titleOne',
    text: 'This is screen one',
    image: require('./assets/brocolly.png'),
    imageStyle: style.image,
    colors: ['#E3EBFF', '#C0D14E'],
  },
]

export class SplashScreen extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  _renderItem = props => (
    <LinearGradient
      style={[styles.mainContent, {
        paddingTop: props.topSpacer,
        paddingBottom: props.bottomSpacer,
        width: props.width,
        height: props.height,
      }]}
      colors={props.colors}
      start={{x: 0, y: .05}} end={{x: .1, y: 1}}
    >
      <Ionicons style={{ backgroundColor: 'transparent' }} size={200} color="white" />
      <View>
        <View style={styles.logo}>
          <ImageBackground source={props.image} style={styles.image} />
        </View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );

  _onDone = () => {
    this.props.ifUserLoggedIn()
  }



  render() {
    return (
      <AppIntroSlider
        slides ={splashScreenSlides}
        renderItem={this._renderItem}
        onDone={this._onDone}
     />
    )
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    flex: 1,
    width: '70%',
    height: "80%",
  },
  logo: {
    height: '40%',
    width: '100%',
    // backgroundColor: '#FCEBBF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});

export default connect (null, { ifUserLoggedIn }) (SplashScreen);
