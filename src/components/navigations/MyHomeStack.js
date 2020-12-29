import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//   StackViewTransitionConfigs
import HomeScreen from '../../screen/HomeScreen.js';
import MapScreen from '../../screen/MapScreen.js';
import HomeListScreen from '../../screen/HomeListScreen.js';
import HomeListFrame from '../../components/HomeList/HomeListFrame';
import ListInformationScreen from '../../screen/ListInformationScreen';
import MyPageScreen from '../../screen/MyPageScreen';
import LoginScreen from '../../screen/LoginScreen';
import SignUpScreen from '../../screen/SignUpScreen';
import FindPasswordScreen from '../../screen/FindPasswordScreen';

import MyHomeTab from './MyHomeTab.js';

const Stack = createStackNavigator();
const HomeRouter = [
  {
    name: 'MyHomeTab',
    compoent: MyHomeTab,
    options: { headerShown: false },
  },
  {
    name: 'Home',
    compoent: HomeScreen,
    options: { headerShown: false },
  },
  {
    name: 'Map',
    compoent: MapScreen,
    options: { headerShown: false },
  },
  {
    name: 'HomeList',
    compoent: HomeListScreen,
    options: { headerShown: false },
  },
  {
    name: 'ListInformation',
    compoent: ListInformationScreen,
    options: { headerShown: false },
  },
  {
    name: 'MyPage',
    compoent: MyPageScreen,
    options: { headerShown: false },
  },
  {
    name: 'Login',
    compoent: LoginScreen,
    options: { headerShown: true },
  },
  {
    name: 'SignUp',
    compoent: SignUpScreen,
    options: { headerShown: false },
  },
  {
    name: 'FindPassword',
    compoent: FindPasswordScreen,
    options: { headerShown: false },
  },
];

const MyHomeStack = () => {
  return (
    <NavigationContainer options={{ headerShown: false }}>
      <Stack.Navigator initialRouteName="MyHomeTab" headerMode="screen">
        {HomeRouter.map((stack) => {
          return (
            <Stack.Screen
              key={`${stack.name} router`}
              name={stack.name}
              component={stack.compoent}
              options={stack.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyHomeStack;
