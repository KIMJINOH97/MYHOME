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

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <Wrapper>
        <MyhomeTitle />
        <MyhomeSlogan>
          <SloganContentContainer>
            <SloganContent>이 집 살아보니{'\n'}괜찮더라</SloganContent>
            <SubContent>
              대학생을 위한{'\n'}자취방 직거래 플랫폼{'\n'}'마이홈'입니다.
            </SubContent>
          </SloganContentContainer>
        </MyhomeSlogan>
        <MyhomeMenu>
          <MenuTitle>
            <MenuTitleContent>종합 계약 키트</MenuTitleContent>
          </MenuTitle>
          <MenuButton>
            <ButtonContainer>
              <MapButton title="map" onPress={() => navigation.push('Map')}>
                <ButtonContent>
                  <Ionicons name="ios-map-outline" size={20} />
                </ButtonContent>
              </MapButton>
              <ButtonName>
                <Text>지도</Text>
              </ButtonName>
            </ButtonContainer>
            <ButtonContainer>
              <MapButton title="map" onPress={() => navigation.push('Map')}>
                <ButtonContent>
                  <Ionicons name="ios-map-outline" size={20} />
                </ButtonContent>
              </MapButton>
              <ButtonName>
                <Text>지도</Text>
              </ButtonName>
            </ButtonContainer>
            <ButtonContainer>
              <MapButton
                title="map"
                onPress={() => navigation.push('HomeList')}
              >
                <ButtonContent>
                  <Ionicons name="ios-map-outline" size={20} />
                </ButtonContent>
              </MapButton>
              <ButtonName>
                <Text>지도</Text>
              </ButtonName>
            </ButtonContainer>
          </MenuButton>
        </MyhomeMenu>
      </Wrapper>
    </SafeAreaView>
  );
};

export default HomeScreen;

const Wrapper = styled.View`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
`;

const MyhomeSlogan = styled.View`
  flex: 5;
  background-color: red;
`;

const SloganContentContainer = styled.View`
  height: 220px;
  padding-left: 18px;
  padding-top: 20px;
  background-color: #ffb8b1;
  border-radius: 8px;
`;

const SloganContent = styled.Text`
  font-size: 35px;
  font-weight: 700;
  letter-spacing: -2px;
`;

const SubContent = styled.Text`
  font-size: 16px;
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

const MenuButton = styled.View`
  flex: 5;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 25px;
  margin-right: 25px;
`;

const ButtonContainer = styled.View`
  background-color: red;
  align-items: center;
`;

const MapButton = styled.TouchableOpacity`
  height: 65px;
  width: 65px;
  background-color: rgba(255, 185, 177, 70);
  border-radius: 35px;
  font-weight: 600;
  justify-content: center;
`;

const ButtonContent = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: 600;
  margin-left: 21px;
`;

const ButtonName = styled.View`
  margin-top: 5px;
`;
