import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../../screen/HomeScreen.js';
import AboutScreen from '../../screen/AboutScreen.js';

const Stack = createStackNavigator();

const MyHomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="About" component={AboutScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyHomeStack;
