import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//   StackViewTransitionConfigs
import HomeScreen from '../../screen/HomeScreen.js';
import MapScreen from '../../screen/MapScreen.js';
import HomeListScreen from '../../screen/HomeListScreen.js';
import HomeListFrame from '../../components/HomeList/HomeListFrame';
import ListInformationScreen from '../../screen/ListInformationScreen';
import LoginScreen from '../../screen/LoginScreen';
import SignUpScreen from '../../screen/SignUpScreen';
import FindPasswordScreen from '../../screen/FindPasswordScreen';

import MyHomeTab from './MyHomeTab.js';
import FavoriteScreen from '../../screen/FavoriteScreen.js';
import MoreScreen from '../../screen/MoreScreen.js';
import FindMentoScreen from '../../screen/FindMentoScreen.js';

const Stack = createStackNavigator();
const HomeRouter = [
  {
    name: 'MyHomeTab',
    component: MyHomeTab,
    options: { headerShown: false },
  },
  {
    name: 'Home',
    component: HomeScreen,
    options: { headerShown: false },
  },
  {
    name: 'Map',
    component: MapScreen,
    options: { headerShown: false },
  },
  {
    name: 'HomeList',
    component: HomeListScreen,
    options: { headerShown: false },
  },
  {
    name: 'ListInformation',
    component: ListInformationScreen,
    options: { headerShown: false },
  },
  {
    name: 'More',
    component: MoreScreen,
    options: { headerShown: false },
  },
  {
    name: 'Login',
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: 'SignUp',
    component: SignUpScreen,
    options: { headerShown: false },
  },
  {
    name: 'FindPassword',
    component: FindPasswordScreen,
    options: { headerShown: false },
  },
  {
    name: 'Favorite',
    component: FavoriteScreen,
    options: { headerShown: false },
  },
  {
    name: 'FindMento',
    component: FindMentoScreen,
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
              component={stack.component}
              options={stack.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyHomeStack;
