import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './components/Signup';
import Login from './components/Login';



export default function App() {
  return (
    <View style={styles.container}>
      <Signup />
      <Login />
      <StatusBar style="auto" />
    </View>
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
