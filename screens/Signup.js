import React from 'react';

import { View, Button } from 'react-native';

import { Input, Text } from 'react-native-elements';

import commonStyles from './common/commonStyles';

export default ({navigation}) => (
		 
<View style={commonStyles.container}>
<Text h1>Sign Up</Text>
	<View style={commonStyles.row}>
		<View style={commonStyles.column}>
			

			<Input
				name="first_name"
				style={commonStyles.inputStyle}
				label="FIRST NAME"
				labelStyle={commonStyles.inputLabel}
				onChangeText={val => this.onChangeText(name, val)}
			/>

			<Input
				name="last_name"
				style={commonStyles.inputStyle}
				label="LAST NAME"
				labelStyle={commonStyles.inputLabel}
				onChangeText={val => this.onChangeText(name, val)}
			/>

			<Input
				name="email"
				style={commonStyles.inputStyle}
				label="EMAIL"
				labelStyle={commonStyles.inputLabel}
				onChangeText={val => this.onChangeText(name, val)}
			/>

			<Input
				secureTextEntry
				name="pw_hash"
				style={commonStyles.inputStyle}
				label="PASSWORD"
				labelStyle={commonStyles.inputLabel}
				onChangeText={val => this.onChangeText(name, val)}
			/>

			<Input
				secureTextEntry
				name="confirm_pw_hash"
				style={commonStyles.inputStyle}
				label="CONFIRM PASSWORD"
				labelStyle={commonStyles.inputLabel}
				onChangeText={val => this.onChangeText(name, val)}
			/>

			<Button
				title="Register"
				onPress={() => navigation.push('Login')}
			/>


		</View>
	</View>
</View>



		);
