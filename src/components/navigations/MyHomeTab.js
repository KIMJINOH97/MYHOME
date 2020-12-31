import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';

import MapScreen from '../../screen/MapScreen';
import HomeScreen from '../../screen/HomeScreen';
import MoreScreen from '../../screen/MoreScreen';
import FavoriteScreen from '../../screen/FavoriteScreen';
import FindMentoScreen from '../../screen/FindMentoScreen';

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
    component: FindMentoScreen,
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
    component: FavoriteScreen,
    title: '관심매물',
    icon: 'heart-outline',
  },
  {
    name: 'More',
    component: MoreScreen,
    title: '더보기',
    icon: 'ios-person-outline',
  },
];

const MyHomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'white', //  배경색 설정 필요
          ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOpacity: 0.5,
              shadowRadius: 5,
              shadowOffset: {
                height: 5,
                width: 5,
              },
            },
            android: {
              elevation: 10,
            },
          }),
        },
      }}
    >
      {bottomTab.map((tab) => {
        return (
          <Tab.Screen
            key={`${tab.name} route`}
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
