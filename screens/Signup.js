import React, { useState } from 'react';

import { View } from 'react-native';

import {Text, Input, Button } from 'react-native-elements';

import commonStyles from './common/commonStyles';

const axios = require('axios')

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
	
		async function signUp(f, l, e, pw, p) {

			const res = await axios.post('http://10.0.0.202:3001/user/signup', {userObject}).then(function (response) {
			
			navigation.push('Login')
			console.log('successfully registered user')
			})
			.catch(function (error) {
				if(error.response) {
					setErrorMessage({ message: error.response.data.error })
			} else {
					setErrorMessage({ message: 'unknown server error' })
			}
			});
		
			
		}
  
		return (
		
		<View style={commonStyles.column}>
			<View style={commonStyles.formContainer}>
			<Text h3 h3Style={commonStyles.headerText}>Create your account</Text>
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

			<Text>{errorMessage.message}</Text>
			
			<Button
				buttonStyle={commonStyles.buttonFilled}
				title="Register"
				onPress={() => signUp(userObject)}
			/>

			<Text style={commonStyles.linkTextRight}>Already have an account?<Text style={commonStyles.primaryColorText} onPress={() => navigation.push('Login')}>Log in</Text></Text>
			</View>
		</View>);




};
