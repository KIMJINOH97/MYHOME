import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//   StackViewTransitionConfigs
import MyHomeTab from './MyHomeTab';
import HomeScreen from '../../screen/main/HomeScreen/index';
import FavoriteScreen from '../../screen/main/FavoriteScreen/index';
import MapScreen from '../../screen/main/MapScreen/index';
import FindMentoScreen from '../../screen/main/MentoScreen/FindMentoScreen/index';
import MoreScreen from '../../screen/main/MoreScreen/index';
import HomeListScreen from '../../screen/main/HomeListScreen/index';
import ApplyMentoScreen from '../../screen/main/MentoScreen/ApplyMentoScreen/index';
import MentoDetailScreen from '../../screen/main/MentoScreen/DetailMentoScreen/index';
import ListInformationScreen from '../../screen/main/HomeListScreen/HomeInformationScreen/index';
import LoginScreen from '../../screen/auth/LoginScreen/index';
import SignUpScreen from '../../screen/auth/SignUpScreen/index';
import FindPasswordScreen from '../../screen/auth/FindPasswordScreen/index';
import PutHomeScreen from '../../screen/main/PutHomeScreen/index';
import EnrollAddressScreen from '../../screen/main/PutHomeScreen/EnrollAddressScreen/index';
import EnrollDetailsScreen from '../../screen/main/PutHomeScreen/EnrollDetailsScreen/index';
import EnrollPictureScreen from '../../screen/main/PutHomeScreen/EnrollPictureScreen/index';

import EnrollCompleteScreen from '../../screen/EnrollCompleteScreen';
import ReviewScreen from '../../screen/ReviewScreen';
import ReserveScreen from '../../screen/ReserveScreen';
import PayScreen from '../../screen/PayScreen';
import PayCompleteScreen from '../../screen/PayCompleteScreen';
import CheckListScreen from '../../screen/CheckListScreen';
import CautionScreen from '../../screen/CautionScreen';

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
  {
    name: 'PutHome',
    component: PutHomeScreen,
    options: { headerShown: false },
  },
  {
    name: 'EnrollPicture',
    component: EnrollPictureScreen,
    options: { headerShown: false },
  },
  {
    name: 'EnrollAddress',
    component: EnrollAddressScreen,
    options: { headerShown: false },
  },
  {
    name: 'EnrollDetails',
    component: EnrollDetailsScreen,
    options: { headerShown: false },
  },
  {
    name: 'ApplyMento',
    component: ApplyMentoScreen,
    options: { headerShown: false },
  },
  {
    name: 'EnrollComplete',
    component: EnrollCompleteScreen,
    options: { headerShown: false },
  },
  {
    name: 'MentoDetail',
    component: MentoDetailScreen,
    options: { headerShown: false },
  },
  {
    name: 'Review',
    component: ReviewScreen,
    options: { headerShown: false },
  },
  {
    name: 'Reserve',
    component: ReserveScreen,
    options: { headerShown: false },
  },
  {
    name: 'Pay',
    component: PayScreen,
    options: { headerShown: false },
  },
  {
    name: 'PayComplete',
    component: PayCompleteScreen,
    options: { headerShown: false },
  },
  {
    name: 'CheckList',
    component: CheckListScreen,
    options: { headerShown: false },
  },
  {
    name: 'Caution',
    component: CautionScreen,
    options: { headerShown: false },
  },
];

const MyHomeStack = ({}) => {
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
