import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Spinner, MainScreenTopHalf, MainScreenBottomHalf } from './common';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { LinearGradient } from 'expo';

// Login Form component

class LoginForm extends Component {

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
			<Button
				onPress={this.onButtonPress.bind(this)}
				small
				raised
				backgroundColor='#8BC34A'
  			title='Sign In' />
		)

	}



	render() {
		return (

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

		);
	};
}

const styles = {
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

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
