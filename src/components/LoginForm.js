import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, googleSignIn } from '../actions';
import { Card, CardSection, Input, Spinner, MainScreenTopHalf, MainScreenBottomHalf } from './common';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { LinearGradient } from 'expo';
// import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

// Login Form component

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
	}

	// Handling the email input
	onEmailChange(text) {
		this.props.emailChanged(text)
	}

	// Handling Password input
	onPasswordChange(text) {
		this.props.passwordChanged(text)
	}

	// Submit Button
	onButtonPress() {
		const {email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	onGoogleButtonPress() {
		this.props.googleSignIn()


	}

 // onGoogleSignIn = async () => {
 //
	// 		// dispatch({type: GOOGLE_LOGIN_USER})
	// 		try {
	// 					const result = await Expo.Google.logInAsync({
	// 						androidClientId: '573284368555-8uabjejjkern8sv1uuddi824er8cg3a2.apps.googleusercontent.com',
	// 						scopes: ['profile', 'email'],
	// 					});
	// 					if (result.type === 'success') {
	// 						console.log(result);
	// 						return result.accessToken;
	// 					} else {
	// 						return {cancelled: true};
	// 					}
	// 				} catch(e) {
	// 					return {error: true};
	// 		}
 //
 //
	// }

	// Error if credentials incorrect
	renderError() {
		if(this.props.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>

			);
		}
	}


	// Login logic with firebase along with spinner if loading
	renderLoginButton() {
		if(this.props.loading) {
			return <Spinner size='large' />
		}
		return (
		<View>
				<Button
					onPress={this.onButtonPress.bind(this)}
					small
					raised
					backgroundColor='#4285F4'
	  			title='Sign In'
			 />
			 <Button
					onPress={this.onGoogleButtonPress.bind(this)}
					small
					raised
					backgroundColor='#4285F4'
	  			title='Sign In With Google' />
			</View>
		)
	}

	render() {
		return (
			<LinearGradient
	      style={styles.mainContent}
	      colors={['#E3EBFF', '#B0EBB4']}
	      start={{x: 0, y: .05}} end={{x: .1, y: 1}}>
				<KeyboardAwareScrollView
		      // style={{ backgroundColor: '#B5FFE9' }}
		      resetScrollToCoords={{ x: 0, y: 0 }}
		      contentContainerStyle={styles.container}
		      scrollEnabled={false}>
						<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '30%', marginTop: 60}}>
							<Image
								style={{ width: '60%', height: 200, resizeMode: 'contain' }}
								source={require('./assets/brocolly.png')}
							/>
						</View>
							<View style={{flex:1, marginTop: 200}}>
									<FormInput
										placeholder='user@email.com'
										inputStyle={styles.email}
										onChangeText={this.onEmailChange.bind(this)}
										value={this.props.email}
									/>

									<FormInput
										secureTextEntry
										placeholder='password'
										inputStyle={styles.password}
										onChangeText={this.onPasswordChange.bind(this)}
										value={this.props.password}
									/>
								</View>

							{this.renderError()}

							{this.renderLoginButton()}



				</KeyboardAwareScrollView>
		  </LinearGradient>

		);
	};
}

const styles = {
	mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
	errorTextStyle: {
		fontSize: 20,
		color: 'red',
		alignSelf: 'center'
	},
	email: {
		color: '#8BC34A'
	},
	password: {
		color: '#8BC34A'
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, googleSignIn })(LoginForm);
