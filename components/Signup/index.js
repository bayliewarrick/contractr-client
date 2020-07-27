/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

import React, { Component } from '../../node_modules/react';

import styles from './styles';
import commonStyles from '../common/commonStyles'

class Signup extends Component {

  doNothing() {
    alert('dang')
    };

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
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
        />

<View style={commonStyles.buttonContainer}>

<TouchableOpacity
          style={commonStyles.button}
          onPress={this.doNothing}
        ><Text>Complete Signup</Text></TouchableOpacity>

<TouchableOpacity
          style={commonStyles.button}
          onPress={this.doNothing}
        ><Text>Clear Form</Text></TouchableOpacity>

        
<TouchableOpacity

          onPress={this.doNothing}
        ><Text>Already have an account? log in!</Text></TouchableOpacity>

</View>

</View>

    );
  }
}

Signup.propTypes = {

};


export default Signup;
