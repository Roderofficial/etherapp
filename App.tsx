/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Profile from './src/pages/Profile';
import TestHome from './src/pages/TestHome';
import WelcomeAuth from './src/pages/auth/welcome';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F5F5F5',
  },
};

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TestHome" component={TestHome} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
