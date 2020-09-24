/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import { View, Button, TextInput, TouchableOpacity } from 'react-native';

import { Input, Text } from 'react-native-elements'

import axios from 'axios';

import React, { Component } from '../../node_modules/react';

import commonStyles from '../common/commonStyles'

class Signup extends Component {

  state = {
      first_name: '', last_name: '', email: '', password: '', phone_number: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  signUp = async () => {
   const { first_name, last_name, email, pw_hash, phone_number } = this.state

    const res = await axios.post('http://10.0.0.202:3001/user/signup', {userObject: {first_name, last_name, email, pw_hash, phone_number}}).then(function (response) {
      
      alert('Created User: ' + response.data.result.email)
    })
    .catch(function (error) {
      alert(error);
    });

    
  }

  render() {
    return (
     

<View style={commonStyles.container}>
	<View style={commonStyles.row}>
		<View style={commonStyles.column}>
			<Text h1>Col 1</Text>
		</View>
		<View style={commonStyles.column}>
			<Text h1>Col 2</Text>
		</View>
	</View>
</View>



    );
  }
}

Signup.propTypes = {

};


export default Signup;