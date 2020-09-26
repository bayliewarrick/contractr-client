import React, { useState } from 'react';

import { View, Button } from 'react-native';

import { Text, Input } from 'react-native-elements';

import commonStyles from './common/commonStyles';

const axios = require('axios')


export default ({navigation}) => {


	const [authState, setAuthState] = useState({loggedIn: false, authToken: ''})

	const [userObject, setUserObject] = useState({
		email: '', pw_hash: '',
	})

	const [errorMessage, setErrorMessage] = useState({
		message: ''
	})

	function onChangeText(key, val) {
		setUserObject({...userObject, [key]: val })
	  }

		async function logIn(e, p) {

			const res = await axios.post('http://10.0.0.202:3001/user/login', {userObject}).then(function (response) {

			setAuthState({LoggedIn: true, authToken: response.data.result})

			//navigate to home, set loggedIn to true in state.
			navigation.navigate('Home')

			})
			
		
			
		}
  

  

		return (
		
		<View style={commonStyles.column}>
			<Text h3>Login</Text>
			<View style={commonStyles.formContainer}>
							
			<Input
				style={commonStyles.inputStyle}
				label="EMAIL"
				onChangeText={val => onChangeText('email', val)}
			/>

			<Input
				secureTextEntry
				style={commonStyles.inputStyle}
				label="PASSWORD"
				onChangeText={val => onChangeText('pw_hash', val)}
			/>

			<Text p>{errorMessage.message}</Text>

			<Button
				title="Log In"
				onPress={() => logIn(userObject)}
			/>

			</View>
		</View>);




};
