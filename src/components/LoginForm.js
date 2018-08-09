import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text)

	}

	onPasswordChange(text) {
		this.props.passwordChanged(text)
	}

	onButtonPress() {
		const {email, password } = this.props;
		this.props.loginUser({ email, password });
	}

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

	renderLoginButton() {
		if(this.props.loading) {
			return <Spinner size='large' />
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login!
			</Button>
		)

	}



	render() {
		return (
			<View
			      style={{ backgroundColor: '#fff' }}
			      resetScrollToCoords={{ x: 0, y: 0 }}
			      contentContainerStyle={styles.container}
			      scrollEnabled={false}
		    >
			<Card>
				<View>
					<Image
						style={{ width: '100%', height: 400, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 90  }}
						source={{uri: ''}}
					/>
				</View>
				<CardSection>
					<Input
						label='Email'
						placeholder='user@email.com'
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}						
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label='Password'
						placeholder='password'
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}					
					/>
				</CardSection>

				{this.renderError()}

				<CardSection>					
					{this.renderLoginButton()}
				</CardSection>
			</Card>
			</View>
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