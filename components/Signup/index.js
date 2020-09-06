/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

import axios from 'axios';

import React, { Component } from '../../node_modules/react';

import styles from './styles';
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
      <View>

        <View style={commonStyles.headerContent}>

        <Text style={commonStyles.headerText}>
          Registration
        </Text>

        <Text style={commonStyles.headerSubText}>
          Tell us a few things about yourself:
        </Text>

        </View>

        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={val => this.onChangeText('first_name', val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={val => this.onChangeText('last_name', val)}
        />

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

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={val => this.onChangeText('phone_number', val)}
        />

<View style={commonStyles.buttonContainer}>

<TouchableOpacity
          style={commonStyles.button}
          onPress={this.signUp}
        ><Text style={commonStyles.buttonText}>Complete Signup</Text></TouchableOpacity>

<TouchableOpacity
          style={commonStyles.button}
          onPress={this.signUp}
        ><Text style={commonStyles.buttonText}>Clear Form</Text></TouchableOpacity>

        
<TouchableOpacity

          onPress={this.signUp}
        ><Text>Already have an account? log in!</Text></TouchableOpacity>

</View>

</View>

    );
  }
}

Signup.propTypes = {

};


export default Signup;