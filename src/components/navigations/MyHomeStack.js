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
      <Stack.Navigator initialRouteName="MyHomeTab" headerMode="screen">
        <Stack.Screen
          name="MyHomeTab"
          component={MyHomeTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: '지도' }}
        />
        <Stack.Screen
          name="HomeList"
          component={HomeListScreen}
          options={{ title: '매물리스트' }}
        />
        <Stack.Screen name="List" component={HomeListFrame} />
        <Stack.Screen
          name="ListInformation"
          component={ListInformationScreen}
          options={{ title: '매물' }}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{ title: '마이페이지' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: '로그인' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyHomeStack;
