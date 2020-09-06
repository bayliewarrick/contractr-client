/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

import axios from 'axios';

import React, { Component } from '../../node_modules/react';

import styles from './styles';
import commonStyles from '../common/commonStyles'

class logIn extends Component {

  state = {
      email: '', pw_hash: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  logIn = async () => {
   const { email, pw_hash } = this.state

    const res = await axios.post('http://10.0.0.202:3001/user/login', {userObject: {email, pw_hash}}).then(function (response) {
      
      alert(response.data.result.uid + ' logged in.')
    })
    .catch(function (error) {
      alert(error);
    });

    
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={commonStyles.headerContent}>

        <Text style={commonStyles.headerText}>
          Log in
        </Text>

        <Text style={commonStyles.headerSubText}>
          Enter your account info to log in:
        </Text>

        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={val => this.onChangeText('email', val)}
        />

        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          onChangeText={val => this.onChangeText('pw_hash', val)}
        />

<View style={commonStyles.buttonContainer}>

<TouchableOpacity
          style={commonStyles.button}
          onPress={this.logIn}
        ><Text style={commonStyles.buttonText}>Log In</Text></TouchableOpacity>

        
<TouchableOpacity
        style={commonStyles.textLink}

          onPress={this.logIn}
        ><Text style={commonStyles.buttonText}>Forgot Password? click to reset</Text></TouchableOpacity>

</View>

</View>

    );
  }
}

logIn.propTypes = {

};


export default logIn;