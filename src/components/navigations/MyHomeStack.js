import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//   StackViewTransitionConfigs
import HomeScreen from '../../screen/HomeScreen.js';
import AboutScreen from '../../screen/AboutScreen.js';
import MyHomeTab from './MyHomeTab.js';

// const Navigation = createStackNavigator(
//   { screenA: ComponentA, screenB: ComponentB },
//   {
//     mode: 'card',
//     transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
//   }
// );
const Stack = createStackNavigator();

const MyHomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyHomeTa" headerMode="screen">
        <Stack.Screen
          name="MyHomeTa"
          component={MyHomeTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="About" component={AboutScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyHomeStack;
