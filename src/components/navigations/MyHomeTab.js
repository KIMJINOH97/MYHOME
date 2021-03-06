import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from '../../screen/main/MapScreen/index';
import HomeScreen from '../../screen/main/HomeScreen/index';
import MoreScreen from '../../screen/main/MoreScreen/index';
import FavoriteScreen from '../../screen/main/FavoriteScreen/index';
// import FindMentoScreen from '../../screen/main/MentoScreen/FindMentoScreen/index';
import ReservationScreen from '../../screen/main/ReservationScreen/index';
import { LIGHT_GRAY, NK500, PRIMARY_NORMAL } from '../../util/Color';

import HOME_ICON_FOCUSED from '../../../assets/HOME_ICON_FOCUSED.png';
import HOME_ICON from '../../../assets/HOME_ICON.png';
import HEART_ICON from '../../../assets/HEART_ICON.png';
import HEART_ICON_FOCUSED from '../../../assets/HEART_ICON_FOCUSED.png';
import MORE_ICON from '../../../assets/MORE_ICON.png';
import MORE_ICON_FOCUSED from '../../../assets/MORE_ICON_FOCUSED.png';
import MAP_ICON from '../../../assets/MAP_ICON.png';
import MAP_ICON_FOCUSED from '../../../assets/MAP_ICON_FOCUSED.png';
import BOOK_ICON from '../../../assets/BOOK_ICON.png';
import BOOK_ICON_FOCUSED from '../../../assets/BOOK_ICON_FOCUSED.png';
import { TextStyle } from '../../util/TextStyle';

// TabNavigator(RouteConfigs, TabNavigatorConfig)

const Tab = createBottomTabNavigator();
const bottomTab = [
  {
    name: 'Home',
    component: HomeScreen,
    title: '홈',
    icon: { focus: HOME_ICON_FOCUSED, non: HOME_ICON },
  },
  {
    name: 'Favorite',
    component: FavoriteScreen,
    title: '관심매물',
    icon: { focus: HEART_ICON_FOCUSED, non: HEART_ICON },
  },

  {
    name: 'Map',
    component: MapScreen,
    title: '지도',
    icon: { focus: MAP_ICON_FOCUSED, non: MAP_ICON },
  },
  {
    name: 'Reservation',
    component: ReservationScreen,
    title: '예약 확인',
    icon: { focus: BOOK_ICON_FOCUSED, non: BOOK_ICON },
  },

  {
    name: 'More',
    component: MoreScreen,
    title: '더보기',
    icon: { focus: MORE_ICON_FOCUSED, non: MORE_ICON },
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
              title: '',
              tabBarIcon: ({ focused, title }) => {
                return (
                  <IconContainer focused={focused}>
                    <IconImage source={focused ? tab.icon.focus : tab.icon.non} />
                    <Title>
                      <TitleContent focused={focused}>{tab.title}</TitleContent>
                    </Title>
                  </IconContainer>
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default MyHomeTab;

const IconContainer = styled.View`
  border-top-color: ${({ focused }) => (focused ? PRIMARY_NORMAL : 'white')};
  border-top-width: 2px;
  padding-top: 5px;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const IconImage = styled.Image`
  width: 24px;
  height: 24px;
`;

const Title = styled.View`
  width: 100%;
  align-items: center;
`;

const TitleContent = styled(TextStyle)`
  font-family: ${NK500};
  color: ${({ focused }) => (focused ? PRIMARY_NORMAL : LIGHT_GRAY)};
  font-size: 10px;
`;
