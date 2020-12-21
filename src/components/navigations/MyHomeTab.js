import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AboutScreen from '../../screen/AboutScreen';
import HomeScreen from '../../screen/HomeScreen';
import MyHomeStack from './MyHomeStack';

// TabNavigator(RouteConfigs, TabNavigatorConfig)

const Tab = createBottomTabNavigator();

const MyHomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="settings" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default MyHomeTab;
