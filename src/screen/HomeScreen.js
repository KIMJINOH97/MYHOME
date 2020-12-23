import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from 'react-native-vector-icons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import MyhomeTitle from '../components/Myhome/MyhomeTitle';

export default HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <Wrapper>
        <MyhomeTitle />
        <MyhomeSlogan>
          <SloganContentContainer>
            <SloganContent>
              이 집 살아보니{'\n'}괜찮더라{'\n'}
            </SloganContent>
            <SubContent>
              {'\n'}
              대학생을 위한{'\n'}자취방 직거래 플랫폼{'\n'}'마이홈'입니다.
            </SubContent>
          </SloganContentContainer>
        </MyhomeSlogan>
        <MyhomeMenu>
          <MenuTitle>
            <MenuTitleContent>종합 계약 키트</MenuTitleContent>
          </MenuTitle>
          <ButtonContainer>
            <MapButton title="go about" onPress={() => navigation.push('Map')}>
              <ButtonContent>
                <Ionicons name="ios-map-outline" size={20} />
              </ButtonContent>
            </MapButton>
            <MapButton title="go about" onPress={() => navigation.push('Map')}>
              <ButtonContent>
                <Ionicons name="ios-map-outline" size={20} />
              </ButtonContent>
            </MapButton>
            <MapButton title="go about" onPress={() => navigation.push('Map')}>
              <ButtonContent>
                <Ionicons name="ios-map-outline" size={20} />
              </ButtonContent>
            </MapButton>
          </ButtonContainer>
        </MyhomeMenu>
        {/* <UploadHome>집 내놓기 &gt;</UploadHome> */}
      </Wrapper>
    </SafeAreaView>
  );
};

const Wrapper = styled.View`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
`;

const MyhomeSlogan = styled.View`
  flex: 5;
  background-color: red;
`;

const SloganContentContainer = styled.Text`
  height: 230px;
  padding: 15px;
  background-color: #ffb8b1;
  border-radius: 8px;
`;

const SloganContent = styled.Text`
  font-size: 35px;
  font-weight: 700;
  letter-spacing: -2px;
`;

const SubContent = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;

const MyhomeMenu = styled.View`
  flex: 6;
  background-color: yellow;
`;

const MenuTitle = styled.View`
  flex: 1;
  background-color: purple;
  justify-content: center;
`;

const MenuTitleContent = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const ButtonContainer = styled.View`
  flex: 5;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 25px;
  margin-right: 25px;
`;

const MapButton = styled.TouchableOpacity`
  height: 55px;
  width: 55px;
  background-color: blue;
  border-radius: 10px;
  font-weight: 600;
  justify-content: center;
`;

const ButtonContent = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: 600;
  margin-left: 16px;
`;
