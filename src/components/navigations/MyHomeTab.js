import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from '../../screen/MapScreen';
import HomeScreen from '../../screen/HomeScreen';

// TabNavigator(RouteConfigs, TabNavigatorConfig)

const Tab = createBottomTabNavigator();

const MyHomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};

export default MyHomeTab;
