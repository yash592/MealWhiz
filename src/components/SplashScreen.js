import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, ImageBackground  } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import AppIntroSlider from 'react-native-app-intro-slider';
import { splashScreenSlides } from './common/SplashScreenSlides';
import { MainScreenTopHalf, MainScreenBottomHalf, CategoryTiles } from './common';
import { ifUserLoggedIn } from '../actions';
import { Font } from 'expo';

const style = StyleSheet.create({
  image: {
    flex: 0.6,
    width: '80%',
    height: "40%",
    resizeMode: 'contain'

  }
});



export class SplashScreen extends Component {

  state = {
   fontLoaded: false,
 };

  async componentDidMount() {
    console.log(this.props);
    await Font.loadAsync({
     'Montserrat': require("./assets/fonts/Montserrat-Medium.ttf"),
   });
   this.setState({ fontLoaded: true });
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
          <ImageBackground source={props.image} style={styles.image} resizeMode='contain' />
        </View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );

  _onDone = () => {
    console.log('skipped');
    this.props.ifUserLoggedIn()
  }


  render() {
    return (
      this.state.fontLoaded ? <AppIntroSlider
        slides ={splashScreenSlides}
        renderItem={this._renderItem}
        onDone={this._onDone}
        showSkipButton
        onSkip={this._onDone}
        dotStyle={{backgroundColor: '#223480'}}
     /> : null
    )
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: "100%",
    opacity: 0.9,
    alignItems: 'center',
    // resizeMode: 'contain'
  },
  logo: {
    // flex: 1,
    height: '30%',
    width: '100%',
    // backgroundColor: '#FCEBBF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10

  },
  text: {
    color: 'black',
    fontSize: 16,
    // backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'black',
    fontFamily:  'Montserrat',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});

export default connect (null, { ifUserLoggedIn }) (SplashScreen);
