import React from 'react';

import { View, Button } from 'react-native';

import { Input, Text } from 'react-native-elements';

import commonStyles from './common/commonStyles';

export default ({navigation}) => (
		 
<View style={commonStyles.container}>
<Text h1>Log In</Text>
	<View style={commonStyles.row}>
		<View style={commonStyles.column}>

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

			<Button
				title="Log in"
				onPress={() => alert('login')}
			/>

  


		</View>
	</View>
</View>



		);
