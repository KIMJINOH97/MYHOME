import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';

import MapScreen from '../../screen/MapScreen';
import HomeScreen from '../../screen/HomeScreen';
import MyPageScreen from '../../screen/MyPageScreen';

// TabNavigator(RouteConfigs, TabNavigatorConfig)

const Tab = createBottomTabNavigator();
const bottomTab = [
  {
    name: 'Home',
    component: HomeScreen,
    title: '홈',
    icon: 'ios-home-outline',
  },
  {
    name: 'FindMento',
    component: MapScreen,
    title: '멘토찾기',
    icon: 'search-outline',
  },
  {
    name: 'Map',
    component: MapScreen,
    title: '지도',
    icon: 'ios-location-outline',
  },
  {
    name: 'Favorite',
    component: MapScreen,
    title: '관심매물',
    icon: 'heart-outline',
  },
  {
    name: 'MyPage',
    component: MyPageScreen,
    title: '마이페이지',
    icon: 'ios-person-outline',
  },
];

const MyHomeTab = () => {
  return (
    <Tab.Navigator>
      {bottomTab.map((tab) => {
        return (
          <Tab.Screen
            name={tab.name}
            component={tab.component}
            options={{
              title: tab.title,
              tabBarIcon: ({ focused }) => {
                return (
                  <Ionicons
                    name={tab.icon}
                    size={20}
                    color={focused ? 'blue' : 'black'}
                  />
                );
              },
              name: 'Home',
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default MyHomeTab;
