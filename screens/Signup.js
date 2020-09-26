import React, { useState } from 'react';

import { View, Button } from 'react-native';

import { Text, Input } from 'react-native-elements';

import commonStyles from './common/commonStyles';

export default ({navigation}) => {
	

	const [userObject, setUserObject] = useState({
		first_name: '', last_name: '', email: '', pw_hash: '', phone_number: '',
	})

	const [errorMessage, setErrorMessage] = useState({
		message: ''
	})

	function onChangeText(key, val) {
		setUserObject({...userObject, [key]: val })
	  }
	
	

	  const axios = require('axios')

		async function signUp(f, l, e, pw, p) {

			const res = await axios.post('http://10.0.0.202:3001/user/signup', {userObject}).then(function (response) {
			
			navigation.push('Login')
			console.log('successfully registered user')
			})
			.catch(function (error) {
				setErrorMessage(error.data.error)
			});
		
			
		}
  

  

		return (
		
		<View style={commonStyles.column}>
			<Text h3>Register</Text>
			<View style={commonStyles.formContainer}>
			<Input
				name='first_name'
				style={commonStyles.inputStyle}
				label="FIRST NAME"
				onChangeText={val => onChangeText('first_name', val)}
			/>

			<Input
				style={commonStyles.inputStyle}
				label="LAST NAME"
				onChangeText={val => onChangeText('last_name', val)}
			/>

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


			<Input
				secureTextEntry
				style={commonStyles.inputStyle}
				label="CONFIRM PASSWORD"
				onChangeText={val => onChangeText('confirm_pw', val)}
			/>

			<Input
				style={commonStyles.inputStyle}
				label="PHONE NUMBER"
				onChangeText={val => onChangeText('phone_number', val)}
			/>

			<Text p>{errorMessage.message}</Text>
			
			<Button
				title="Register"
				onPress={() => signUp(userObject)}
			/>

			<Text onPress={() => navigation.push('Login')}>... Or, click here to Log In!</Text>
			</View>
		</View>);




};
