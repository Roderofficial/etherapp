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
import LoginEmail from './src/pages/auth/login/Email';
import LoginCode from './src/pages/auth/login/Code';
import Tabs from './src/components/tabs';
import FriendsRequests from './src/pages/notifications/FriendsRequests';
import {SheetProvider} from 'react-native-actions-sheet';
import ScreenChecker from './src/pages/auth/screenChecker';

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
    <SheetProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="ScreenChecker" component={ScreenChecker} />
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="FriendsRequests" component={FriendsRequests} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} />
          <Stack.Screen name="LoginEmail" component={LoginEmail} />
          <Stack.Screen name="LoginCode" component={LoginCode} />
        </Stack.Navigator>
      </NavigationContainer>
    </SheetProvider>
  );
}

export default App;
