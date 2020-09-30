/* eslint-disable react/display-name */
import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Signup from '../screens/Signup'
import Login from '../screens/Login'

import Home from '../screens/Home'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducer'

const store = createStore(reducer)

const AuthStack = createStackNavigator()

const LoggedInStack = createBottomTabNavigator()

const LoggedInScreen = () => (
  <LoggedInStack.Navigator>
    <LoggedInStack.Screen name="Home" component={Home} />
  </LoggedInStack.Navigator>
)

const AuthStackScreen = () => (

  <AuthStack.Navigator>
    <AuthStack.Screen name="Signup" component={Signup} />
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
)

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInScreen /> : <AuthStackScreen />}
      </NavigationContainer>
    </Provider>
  )
}
