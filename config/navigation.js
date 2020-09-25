import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Signup from '../screens/Signup';
import Login from '../screens/Login';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Signup" component={Signup} />
        <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
)

export default () => ( 
<NavigationContainer>
    <AuthStackScreen />
</NavigationContainer>
   )