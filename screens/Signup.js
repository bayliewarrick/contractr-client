import React, { useState } from 'react';

import { View, Button } from 'react-native';

import { Input, Form } from 'react-native-elements';

import commonStyles from './common/commonStyles';




export default ({navigation}) => {
	

	const [userObject, setUserObject] = useState({
		first_name: '', last_name: '', email: '', pw_hash: '', phone_number: ''
	})

	function onChangeText(key, val) {
		setUserObject({...userObject, [key]: val })
	  }

	  const axios = require('axios')

		async function signUp(f, l, e, pw, p) {

			const res = await axios.post('http://10.0.0.202:3001/user/signup', {userObject}).then(function (response) {
			
			alert('Created User: ' + response.data.result.email)
			})
			.catch(function (error) {
			alert(error);
			});
		
			
		}
  

  

		return (
		
		<View style={commonStyles.column}>
			

			<Input
				name='first_name'
				style={commonStyles.inputStyle}
				label="FIRST NAME"
				labelStyle={commonStyles.inputLabel}
				onChangeText={val => onChangeText('first_name', val)}
			/>

			<Input
				style={commonStyles.inputStyle}
				label="LAST NAME"
				labelStyle={commonStyles.inputLabel}
				onChangeText={val => onChangeText('last_name', val)}
			/>

			<Input
				style={commonStyles.inputStyle}
				label="EMAIL"
				labelStyle={commonStyles.inputLabel}
				onChangeText={val => onChangeText('email', val)}
			/>

			<Input
				secureTextEntry
				style={commonStyles.inputStyle}
				label="PASSWORD"
				labelStyle={commonStyles.inputLabel}
				onChangeText={val => onChangeText('pw_hash', val)}
			/>


			<Input
				secureTextEntry
				style={commonStyles.inputStyle}
				label="CONFIRM PASSWORD"
				labelStyle={commonStyles.inputLabel}
				onChangeText={val => onChangeText('confirm_pw', val)}
			/>

			<Input
				style={commonStyles.inputStyle}
				label="PHONE NUMBER"
				labelStyle={commonStyles.inputLabel}
				onChangeText={val => onChangeText('phone_number', val)}
			/>

			<Button
				title="Register"
				onPress={() => signUp(userObject)}
			/>
			

		</View>);




};
