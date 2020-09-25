import React, { useState } from 'react';

import { View, Button } from 'react-native';

import { Input } from 'react-native-elements';

import commonStyles from './common/commonStyles';


export default ({navigation}) => {

	const [value, setValue] = useState('');


		return (
		
		<View style={commonStyles.column}>
			

			<Input
				name="first_name"
				style={commonStyles.inputStyle}
				label="FIRST NAME"
				labelStyle={commonStyles.inputLabel}
			/>

			<Input
				style={commonStyles.inputStyle}
				label="LAST NAME"
				labelStyle={commonStyles.inputLabel}
			/>

			<Input
				style={commonStyles.inputStyle}
				label="EMAIL"
				labelStyle={commonStyles.inputLabel}
			/>

			<Input
				secureTextEntry
				style={commonStyles.inputStyle}
				label="PASSWORD"
				labelStyle={commonStyles.inputLabel}
			/>

			<Input
				secureTextEntry
				style={commonStyles.inputStyle}
				label="CONFIRM PASSWORD"
				labelStyle={commonStyles.inputLabel}
			/>

			<Input
				secureTextEntry
				name="confirm_pw_hash"
				style={commonStyles.inputStyle}
				label="CONFIRM PASSWORD"
				labelStyle={commonStyles.inputLabel}
			/>

			<Button
				title="Register"
				onPress={() => navigation.push('Login')}
			/>


		</View>);




};
