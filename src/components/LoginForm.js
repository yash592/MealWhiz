import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Spinner } from './common';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

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
  			title='Login' />
		)

	}



	render() {
		return (
			<KeyboardAwareScrollView
			      style={{ backgroundColor: '#F1F2EC' }}
			      resetScrollToCoords={{ x: 0, y: 0 }}
			      contentContainerStyle={styles.container}
			      scrollEnabled={false} >

					<Image
						style={{ width: '100%', height: 400, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 90  }}
						source={{uri: ''}}
					/>

					<FormLabel>Email</FormLabel>
						<FormInput
							label='Email'
							placeholder='user@email.com'
							onChangeText={this.onEmailChange.bind(this)}
							value={this.props.email}
						/>

					<FormLabel>Password</FormLabel>
						<FormInput
							secureTextEntry
							label='Password'
							placeholder='password'
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
						/>

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
