import { StatusBar } from 'expo-status-bar';


/* Navigation imports */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Signup from './components/Signup';
import Login from './components/Login';



const Stack = createStackNavigator({ Home: Signup,  Login: Login });


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ Signup } />
          <Stack.Screen name="Login" component={ Login } />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
