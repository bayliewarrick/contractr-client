import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Signup from '../screens/Signup';
import Login from '../screens/Login';
import LoggedInScreen from '../screens/Home'

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
    
    <AuthStack.Navigator>
        <AuthStack.Screen name="Signup" component={Signup} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Home" component={LoggedInScreen} />
    </AuthStack.Navigator>
)



export default () => {

    const [isLoggedIn, setLoggedIn] = React.useState(false)

    React.useEffect(() => {
    setLoggedIn(isLoggedIn)
}, [])

return ( 
<NavigationContainer>
    {isLoggedIn ? <LoggedInStack /> : <AuthStackScreen />}
</NavigationContainer>
);
};