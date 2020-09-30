import React, { useState } from 'react'

import { View } from 'react-native'

import { Text, Input, Button } from 'react-native-elements'

import commonStyles from './common/commonStyles'

const axios = require('axios')

export default ({ navigation }) => {
  const [authState, setAuthState] = useState({ loggedIn: false, authToken: '' })

  const [userObject, setUserObject] = useState({
    email: '', pw_hash: ''
  })

  const [errorMessage, setErrorMessage] = useState({
    message: ''
  })

  function onChangeText (key, val) {
    setUserObject({ ...userObject, [key]: val })
	  }

  async function logIn (e, p) {
    const res = await axios.post('http://192.168.150.185:3001/user/login', { userObject }).then(function (response) {
      setAuthState({ LoggedIn: true, authToken: response.data.result })

      // navigate to home, set loggedIn to true in state.
      navigation.navigate('Home')
    }).catch(function (error) {
      if (error.response) {
        setErrorMessage({ message: error.response.data.error })
      } else {
        setErrorMessage({ message: 'unknown server error' })
      }
    })
  }

  return (

    <View style={commonStyles.column}>
      <View style={commonStyles.formContainer}>
        <Text h3 style={commonStyles.headerText}>Login to your account</Text>

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

        <Text>{errorMessage.message}</Text>

        <Button
          buttonStyle={commonStyles.buttonFilled}
          title="Log In"
          onPress={() => logIn(userObject)}
        />

        <Text style={commonStyles.linkTextRight}>Need to sign up? <Text style={commonStyles.primaryColorText} onPress={() => navigation.goBack()}>Create Account</Text></Text>

      </View>
    </View>)
}
