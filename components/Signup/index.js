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
      firstName: '', lastName: '', email: '', password: ''
    
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  signUp = () => {
    const { firstName, lastName, email, password } = this.state

      console.log('state: ', this.state)

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
          onChangeText={val => this.onChangeText('firstName', val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={val => this.onChangeText('lastName', val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={val => this.onChangeText('email', val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={val => this.onChangeText('password', val)}
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
